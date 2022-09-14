var todos = [];
var index = 1;

module.exports.getAll = () => todos;
module.exports.getById = (id) => {
    var index = todos.findIndex(x => x._id === id);
    return todos[index];
};
module.exports.add = (todo) => {
    todo._id = index++;
    todo.date = new Date(2022, 9, 13);
    todo.status = true;
    todos.push(todo);
    return index;
}
module.exports.edit = (todo) => {
    var index = todos.findIndex(x => x._id === todo.id);
    todos[index].description = todo.description;
    todos[index].status = todo.status ?? false;
    return todo._id;
}
module.exports.del = (id) => {
    var index = todos.findIndex(x => x._id === id);
    var arr = todos.splice(index, 1);
    return arr[0];
}