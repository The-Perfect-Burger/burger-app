/*jshint node:true*/

module.exports = function(app) {
  // For options, see:
  // https://github.com/nodejitsu/node-http-proxy
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use('/api/', function(req, res, next) {
    proxy.web(req, res, { target: 'http://localhost:4000/'});
  });
};
