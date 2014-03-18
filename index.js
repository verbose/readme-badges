var fs = require('fs');
var path = require('path');


/**
 * Returns an array of all files in the
 * templates directory
 */
module.exports = (function() {
  var dir = path.join(__dirname, 'templates');
  return fs.readdirSync(dir).map(function(filepath) {
    return path.resolve(dir, filepath).replace(/\\/g, '/');
  });
})();