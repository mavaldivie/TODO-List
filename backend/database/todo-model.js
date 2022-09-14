var mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    date: {type: Date, default: Date.now, required: true},
    description: {type: String, required: true},
    status: {type: Boolean, required: true, default: true}
})

const Todos = module.exports = mongoose.model('Todo', todoSchema);

module.exports.getAll = (callback) => Todos.find({}, callback);

module.exports.getById = (id, callback) => Todos.findById({_id: id}, callback);

module.exports.add = (todo, callback) => Todos.create(todo, callback);

module.exports.del = (id, callback) => Todos.deleteOne({_id: id}, callback);

module.exports.edit = (todo, callback) => Todos.findOneAndUpdate({_id: todo._id}, todo, { new: true }, callback);