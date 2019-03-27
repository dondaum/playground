const request = require('request');

// Constructor
function Todo() {
    this.url = 'https://jsonplaceholder.typicode.com/todos'
    this.todos = {}
}


// class methods
Todo.prototype.getaAllTodos = function() {
    request(this.url, (err, res, body) => {
        if (err) { 
            return console.log(err); 
        } else {
        return JSON.parse(body)
        }
    });
};



// export the class
module.exports = Todo;

