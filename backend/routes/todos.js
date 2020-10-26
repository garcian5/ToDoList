/**
 * To do routes
 * */

const router = require('express').Router();
let Todo = require('../models/todo.model');

// gets the list of todos
router.route('/').get((req, res) => {
    Todo.find()
        .then(todos => res.json(todos))
        .catch(err => res.status(400).json('Error: ' + err));
});

// adds todos to the database upon post request
router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const completed = req.body.completed;
    const date = Date.parse(req.body.date);
    // when request is filled, it creates a new Todo object
    const newTodo = new Todo({
        username,
        description,
        completed,
        date,
    });
    // and saves to do. if there's any problem, it will run an error message
    newTodo.save()
        .then(() => res.json('To Do added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// gets the information of a todo by id
router.route('/:id').get((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error: ' + err));
});

// deletes the todo by id
router.route('/:id').delete((req, res) => {
    Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// edits the todo by id
router.route('/update/:id').post((req, res) => {
    Todo.findById(req.params.id)
        .then(todo => {
            todo.username = req.body.username;
            todo.description = req.body.description;
            todo.completed = req.body.completed;
            todo.date = Date.parse(req.body.date);

            todo.save()
                .then(() => res.json('Todo updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;