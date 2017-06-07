var express = require('express');
var router = express.Router();

/* set queries.js as var 'db'. */
var db = require('../queries');

/* set routes */
router.get('/api/bookstore', db.getAllPuppies);
router.get('/api/bookstore/:id', db.getSingleBook);
router.post('/api/bookstore', db.createBook);
router.put('/api/bookstore/:id', db.updateBook);
router.delete('/api/bookstore/:id', db.removeBook);


/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
module.exports = router;