var promise = require('bluebird')

var options = {
  // Initialization Options
  promiseLib: promise
}

var pgp = require('pg-promise')(options)
var connectionString = 'postgres://localhost:3000/bookstore'
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

// GET Single Book
function getSingleBook (req, res, next) {
  var pupID = parseInt(req.params.id)
  db.one('select * from books where id = $1', pupID)
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
    values(${title}, ${genre}, ${height}, ${subgenre})',
    req.body)
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
function updateBook(req, res, next) {
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
function removeBook(req, res, next) {
  var pupID = parseInt(req.params.id)
  db.result('delete from books where id = $1', pupID)
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

// GET All Publishers 


module.exports = {
  getAllBooks: getAllBooks,
  getSingleBook: getSingleBook,
  createBook: createBook,
  updateBook: updateBook,
  removeBook: removeBook
}