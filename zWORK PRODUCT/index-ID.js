var express = require('express')
var router = express.Router()

/* set queries.js as var 'db'. */
var db = require('../queries')

// app.get('/bookstore/:bookID', function(req, rep){
//   rep.send('you have requested to see the book id : ' + req.params.id)
// })
app.get('/bookstore/:id', function (req, rep) {
  rep.send('you have requested to see the book id of ' + req.params.id)
})

