var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:3000/bookstore';
var db = pgp(connectionString);

// add query functions




module.exports = {
  getAllBooks: getAllBooks,
  getSingleBook: getSingleBook,
  createBook: createBook,
  updateBook: updateBook,
  removeBook: removeBook
};