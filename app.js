
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , argv = require('optimist').default({d: 10, e: 303, p:3000}).argv
  , crypto = require('crypto')
  , https = require('https')
  , fs = require('fs'); 


if(argv.s){
  var httpsOptions = {key: fs.readFileSync('key.pem'), cert: fs.readFileSync('cert.pem')};
  var app = module.exports = express.createServer(httpsOptions);
}
else{
  var app = module.exports = express.createServer();
}

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

console.log("Delay in " + argv.d +" seconds with response " + argv.e);
app.get('/dpm-payment', routes.index);
app.post('/dpm-payment', function(req, res){
  routes.dpmPayment(req, res, new Number(argv.d), argv.e); 
});

if(argv.p < 1024 || argv.p > 65535){
  throw "Illegal port, should be between 1024 and 65535"
}
app.listen(argv.p, function(){
  console.log("Express server listening on port %d in %s env and %s mode", app.address().port, app.settings.env, argv.s ? 'secure' : 'normal');
});

