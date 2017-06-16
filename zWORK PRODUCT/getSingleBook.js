// GET Single Book ROWS
router.get('/getSingleBook',function (req, res, next) {
  res.send(books)
  
  var bookID = parseInt(req.params.id)
  db.one('select title, author from books where bookID = $1', bookID)
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
