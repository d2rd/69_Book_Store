var express = require('express')
var router = express.Router()

/* GET details page. */
router.get('/', function (req, res, next) {
  res.render('details', { title: 'Book Detailed Book List' })
})

module.exports = router
