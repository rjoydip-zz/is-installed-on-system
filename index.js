const pathKey = require('path-key')

module.exports = (str) => !!process.env[pathKey()].toLowerCase().match(str)
