var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


var sampleToDoItems = require('../todoTasks.json');

/* GET Todo listing. */
//GET /Todos/
router.get('/todos', function(req, res) {

  res.type('application/json');
  res.status(200);

  res.json(sampleToDoItems);
});

module.exports = router;