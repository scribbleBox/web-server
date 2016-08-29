var middleware = {
  requireAuthentication: function (req, res, next) {
    console.log('private route hit!');
  },
  logger: function (req, res, next) {
    var date = new Date().toString();
    console.log('request: ' + req.method + ' ' + req.originalUrl + '\nDate: ' + date);
    next();
  }
};

module.exports = middleware;
