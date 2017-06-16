var express = require('express')
var router = express.Router()

/* GET single book page. */
router.get('/', function (req, res, next) {
  res.render('singleBook', { title: 'Book Details' })
})

// /* set queries.js as var 'db'. */
// var db = require('../queries')

// // GET Single Book ROWS
// function getSingleBook(req, res, next) {
//   var bookID = parseInt(req.params.id)
//   db.one('select title, author from books where bookID = $1', bookID)
//     .then(function (data) {
//       res.status(200)
//         .json({
//           status: 'success',
//           data: data,
//           message: 'Retrieved ONE book'
//         })
//     })
//     .catch(function (err) {
//       return next(err)
//     })
// }

module.exports = router
