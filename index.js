const fs = require('fs');
const pathKey = require('path-key')

module.exports = (package) => !!process.env[pathKey()].toLowerCase().match(package)
