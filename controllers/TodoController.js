const TodoModel = require('../models/todoModel');
const todos = new TodoModel;
const request = require('request');

// Display list of all Todos.
// This is the first implementation: Business Logic is within the controller
exports.index = function(req, res, next) {
  let url = 'https://jsonplaceholder.typicode.com/todos'
  request(url, function (err, response, body) {
    if(err) {
      res.render('todos/index', {title: 'Upps something went very wrong', todos: null});
    } else {
      console.log()
      let allTodos = JSON.parse(body);
      res.render('todos/index', {title: 'All todos from API', todos: allTodos })
    }
  })
};

// exports.index = function(req, res, next) {
//   function 
//   let allTodos = todos.getaAllTodos();

//   if(allTodos) {
//     res.render('todos/index', {title: 'All todos from API', todos: allTodos });
//   }
// };