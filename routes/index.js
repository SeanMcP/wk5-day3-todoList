const express = require('express');
const router = express.Router();

// Provided in the assignment

let todoList = ["Wash the behind your ears", "Climb a tree", "Read your favorite book", "Write a letter", "Play a game", "Sing for fun"];
let doneList = ["Hug a friend", "Say 'good day!' to a stranger", "Fly a kite"];
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
  res.render('list', {todo: todoList, done: doneList});
});

router.post('/add', function(req, res){
  todoList.push(req.body.task);
  res.redirect('/');
});

router.post('/done', function(req, res){
  doneList.push(req.body.task)
  res.redirect('/');
})

router.post('/todo', function(req, res){
  todoList.push(req.body.task)
  res.redirect('/');
})
// router.post('/signup', function(req, res){
//
// });

module.exports = router;
