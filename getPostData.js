var ssbClient = require('ssb-client')
//var pull = require('pull-stream')
//
module.exports = function getPostData(id, callback) {
  ssbClient(function (err, sbot) {
    //sbot.whoami(cb)
    sbot.get(id, callback)
  })
}

