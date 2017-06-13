var promise = require('bluebird')

var options = {
  // Initialization Options
  promiseLib: promise
}

var pgp = require('pg-promise')(options)
var connectionString = 'postgres://localhost:5432/Bookstore' // The port number '5432' is the db port.  Using '3000' directs the app to look at the same port as the webpage.

var db = pgp(connectionString)

// add query functions from "Michael Herman: Designing RESTful API With Node and Postgres".  Substituted puppies from books.

// GET All Books
function getAllBooks (req, res, next) {
  db.any('select * from books')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL books'
          })
      })
      .catch(function (err) {
        return next(err)
      })
}

// // GET Single Book JSON
// function getSingleBook (req, res, next) {
//   var bookID = parseInt(req.params.id)
//   db.one('select data ->> $title FROM 
//   books;')
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

// GET Single Book ROWS
function getSingleBook(req, res, next) {
  var bookID = parseInt(req.params.id)
  db.one('select title, author from books where "bookID" = 3', bookID)
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ONE book'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

// Create (POST) a Book
function createBook (req, res, next) {
  req.body.height = parseInt(req.body.height)
  db.none('insert into books(title, genre, height, subgenre)' +
    'values($title, $genre, $height, $subgenre)')
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Inserted one book'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

// Update (PUT) book info
function updateBook (req, res, next) {
  db.none('update books set title=$1, genre=$2, height=$3, subgenre=$4 where id=$5',
    [req.body.title, req.body.genre, parseInt(req.body.height),
      req.body.subgenre, parseInt(req.params.id)])
    .then(function () {
      res.status(200)
        .json({
          status: 'success',
          message: 'Updated book'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

// Delete a Single Book
function removeBook (req, res, next) {
  var bookID = parseInt(req.params.id)
  db.result('delete from books where id = $1', bookID)
    .then(function (result) {
      /* jshint ignore:start */
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} book`
        })
      /* jshint ignore:end */
    })
    .catch(function (err) {
      return next(err)
    })
}

// GET All Publishers STRETCH
function getAllPublishers (req, res, next) {
  db.any('select publishers from books')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL publishers'
        })
    })
    .catch(function (err) {
      return next(err)
    })
}

module.exports = {
  getAllBooks: getAllBooks,
  getSingleBook: getSingleBook,
  createBook: createBook,
  updateBook: updateBook,
  removeBook: removeBook,
  getAllPublishers: getAllPublishers
}
