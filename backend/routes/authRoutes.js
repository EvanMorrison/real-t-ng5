const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config');


require('../authStrategies')(passport);

router.use(passport.initialize());


// create a json web token and store it in a cookie on the client
  function setLocalTokenCookie(req,res) {
    if (!req.user) return res.status(404).send({message: 'Something went wrong trying to signin.', req: Object.keys(req)});
    var token = jwt.sign(req.user.token, config.token_secret, { expiresIn: 60*60*24 });
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 });
    res.user = req.user.profile;
    res.send(res.user);
  }

  function setOauthTokenCookie(req,res) {
    if (!req.user) return res.status(404).send({message: 'Something went wrong trying to signin.', req: Object.keys(req)});
    var token = jwt.sign(req.user.token, config.token_secret, { expiresIn: 60*60*24 });
    res.cookie('token', token, { maxAge: 1000 * 60 * 60 * 24 });
    res.user = req.user.profile;
    res.redirect('http://localhost:4200/home');
  }


router.post('/signup', function(req, res, next) {
      passport.authenticate('local-signup', { 
        session: false, 
        passReqToCallback: true
      }, function(err, user, info) {
            if (err) {
              return next(err);
            }
            if (!user) { 
              return res.status(409).send(info) // email in use by existing account
            }
            else {
              req.user = user; // 
              return setLocalTokenCookie(req, res);
            }
      })(req, res, next);
});


router.post('/signin', (req, res, next) => {
    passport.authenticate('local-signin', {
      session: false,
      passReqToCallback: true
    }, function(err, user, info) {
          if (err) {
            return next(err);
          }
          if (!user) {
            return res.status(401).send(info)
          }
          else {
            req.user = user;
            return setLocalTokenCookie(req, res);
          }
    })(req, res, next);
})


router.get('/google', passport.authenticate('google', {
  display: 'popup',
  session: false,
  scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile']
}));

router.get('/google/callback', passport.authenticate('google', {
  session: false,
  failureRedirect: '/login'
}), setOauthTokenCookie);


module.exports = router;
