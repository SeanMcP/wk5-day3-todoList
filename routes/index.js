const express = require('express');
const router = express.Router();

// Provided in the assignment

const todoList = [
  {
    task: "Wash the behind your ears",
    done: true
  },
  {
    task: "Climb a tree",
    done: true
  },
  {
    task: "Read your favorite book",
    done: false
  },
  {
    task: "Write a letter",
    done: false
  },
  {
    task: "Play a game",
    done: false
  },
  {
    task: "Sing for fun",
    done: false
  }
];
//
// app.get("/", function (req, res) {
//   res.render('index', { todos: todos });
// });
//
// app.post("/", function (req, res) {
//   todos.push(req.body.todo);
//   res.redirect('/');
// })

// End provided code

router.get('/', function(req, res){
  res.render('list', {todoList: todoList});
});

router.push('/', function(req, res){
  console.log(req.body.task);
});

// router.post('/signup', function(req, res){
//
// });

module.exports = router;
