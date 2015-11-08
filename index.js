var isProd = process.env.NODE_ENV === 'production'
//var canonicalHost = process.env.CANONICAL_HOST || "http://hyper.mixmix.io"

var Router = require('routes')
var router = Router()
var http = require('http')
var url = require('url')

var getPostData = require('./getPostData')
//var exampleId = '%aspmzfO+Yga3vjEX+WzOxHxK2gn0PjjgmFjF0qyr8R8=.sha256'


router.addRoute('/%:post', handlePost)
function handlePost(req, res, match) {
  //console.log(req)
  var postId = '%' + match.params.post 

  getPostData( postId, function(err, data) {
    data = JSON.stringify(data,null,2)
    res.end(data)
  })
}

function handler(req, res) {
  var requestDetails = url.parse(req.url, true)
  var match = router.match(requestDetails.pathname)

  if (match) {
    match.fn(req, res, match)
  }
  else {
    res.end('nope')
  }
}

function startServer() {
  var port = process.env.PORT || 5000
  http.createServer( handler ).listen(port)
}

startServer()






