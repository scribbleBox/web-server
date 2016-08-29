var express = require('express');
var app = express();

var PORT = 3000;

var middleWare = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit!');
  },
  logger: function (req, res, next) {
    var date = new Date().toString();
    console.log('request: ' + req.method + ' ' + req.originalUrl + '\nDate: ' + date);
    next();
  }
};

app.use(middleWare.logger);

// app.use(middleWare.requireAuthentication);

app.get('/about', middleWare.requireAuthentication, function (req, res) {
  res.send('About Us!');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
  console.log('Express server started!');
  console.log('port: ' + PORT);
});
