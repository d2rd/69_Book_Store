var express = require('express')
var router = express.Router()

/* set queries.js as var 'db'. */
var db = require('../queries')

// path to my app is "/Users/glenn-daviddaniel/lgProjects-local/gc69/69_Book_Store"

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

/* set routes */
router.get('/', function (req, res) {
  console.log('Welcome to Books, Bait and Beer')
  res.send(200)
},

router.get('/bookstore', db.getAllBooks),
router.get('/bookstore/:id', db.getSingleBook),
router.post('/bookstore', db.createBook),
router.put('/bookstore/:id', db.updateBook),
router.delete('/bookstore/:id', db.removeBook),
router.get('/bookstore', db.getAllPublishers)
)

module.exports = router
