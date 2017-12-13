
const PROXY_CONFIG = [
  { 
    context: [
      '/auth',
      '/api'
    ],
    "target": "http://localhost:4201",
    "secure": false
    
  }
]

module.exports = PROXY_CONFIG;