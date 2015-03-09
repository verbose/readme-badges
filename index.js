var path = require('path');
var dir = path.join(__dirname, 'templates');

module.exports = require('fs').readdirSync(dir).map(function(fp) {
  return path.resolve(dir, fp);
});