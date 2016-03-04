
var express = require('express');
var swig = require('swig');
var app = express();
var mjml = require( 'mjml' );

var reload = function(path) {
    // invaidate the whole cache..
    // this means that we can change master templates too.
    Object.keys(require.cache).forEach(function(key) { delete require.cache[key] })
    return module.require(path);
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/preview', function(req, res) {
  // GET 'http://www.example.com/admin/new'
  var file_text = reload('.' + req.path + '');
  htmlOutput = mjml.mjml2html(file_text)
  //
  // console.log(htmlOutput);

  res.header('Content-Type', 'text/html');
  res.send(htmlOutput)

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
