var express = require('express');
var router = express.Router();
var todoController = require('../controllers/TodoController');

// Get the index route for the todos and handle to todo controller
router.get('/', todoController.index )

module.exports = router;
  