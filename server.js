const express = require('express');
const app     = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const expressJWT = require('express-jwt');
const cookieParser = require('cookie-parser');

const config = require('./backend/config');
if (/PORT=/.test(process.argv[2])) process.env.PORT = +process.argv[2].replace(/PORT=/,'');
const port = process.env.PORT || 4201;
const isProduction = process.env.NODE_ENV === 'production'
////////////////////////
// connect to MongoDB //
///////////////////////
mongoose.Promise = global.Promise;
const database = `mongodb://${config.db_user}:${config.db_pwd}@${config.db_path}/${config.db_name}`;
mongoose.connect(database, {
                              useMongoClient: true,
                              reconnectTries: 30
                }).then((res) => {
                    console.log(`Connected to MongoDB ${config.db_name} as user: ${config.db_user}`)
                  })
                  .catch((err) => {
                    console.log('Error connecting to MongoDB ', err.message)
                  });
mongoose.connection.on('disconnected', () => {
  mongoose.connect(database, { useMongoClient: true})
  .then((res) => console.log('Reconnected to MongoDB'))
  .catch((err) => console.log('Error reconnecting to MongoDB', err.message))
});



// MIDDLEWARE
app.use(logger( (isProduction ? 'common' : 'dev') ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/auth', require('./backend/routes/authRoutes'));
app.use('/api', expressJWT({secret: config.token_secret}));
app.use('/api/users', require('./backend/routes/userRoutes'));
app.use('/api/cases', require('./backend/routes/caseRoutes'));
app.use('/api/people', require('./backend/routes/personRoutes'));
app.use('/api/properties', require('./backend/routes/propertyRoutes'));
app.use('/api/documents', require('./backend/routes/documentRoutes'));






app.listen(port, function() {
  console.log('Server is listening on port ', port);
});

