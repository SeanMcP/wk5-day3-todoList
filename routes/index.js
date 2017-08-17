const express = require('express');
const router = express.Router();

let todoList = ["Wash behind your ears", "Climb a tree", "Sing for fun"];
let doneList = ["Hug a friend", "Read a new book", "Write a letter", "Play a game", "Say 'good day!' to a stranger", "Fly a kite"];

router.get('/', function(req, res){
  res.render('list', {todo: todoList, done: doneList});
});

router.post('/add', function(req, res){
  if(req.body.task){
    todoList.push(req.body.task);
    res.redirect('/');
  }
});

router.post('/done', function(req, res){
  doneList.push(req.body.task)
  todoList = todoList.filter(function(item){
    return item !== req.body.task;
  });
  res.redirect('/');
})

router.post('/todo', function(req, res){
  todoList.push(req.body.task)
  doneList = doneList.filter(function(item){
    return item !== req.body.task;
  });
  res.redirect('/');
})

module.exports = router;
