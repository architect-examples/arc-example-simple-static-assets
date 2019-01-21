let fs = require('fs')
let util = require('util')
let read = util.promisify(fs.readFile)

exports.handler = async function http(req) {
  return {
    type: 'text/javascript; charset=utf8',
    body: await read(req.params.file, {encoding:'utf8'}) // you'll want to cache and check that req.params.file is ok to serve…this could be a backdoor to your node modules otherwise
  }
}
