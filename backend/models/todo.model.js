/**
 * Todo schema
 * */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

const ToDo = mongoose.model('To Do', todoSchema);

module.exports = ToDo;