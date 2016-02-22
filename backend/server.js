var path = require('path')
var webpack = require('webpack')
var express = require('express')
var config = require('../webpack.config')

var app = express()
var compiler = webpack(config)

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function(req, res) {
  res.render('index')
})

app.listen(4000, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:4000')
})
