const repository = require('../database/todo-model')

module.exports.getAll = (req, res) => {
    try{
        repository.getAll(async (err, todos) => {
            console.log("GET request:", todos);
            if (err) return res.status(500);
            else return res.status(200).json(todos);
        })   
    }catch{
        return res.status(500);
    }
}
module.exports.getById = (req, res) => {
    try{
        const id = req.params.id;
        repository.getById(id, async (err, todo) => {
            console.log(`GET request (${id}):`, todo);
            if (err) return res.status(500);
            else return res.status(200).json(todo);
        })   
    }catch{
        return res.status(500);
    }
}

module.exports.add = (req, res) => {
    try{
        var todo = req.body;
        repository.add(todo, async (err, obj) => {
            console.log('POST request:', obj);
            if (err) return res.status(500);
            else return res.status(200).json(obj);
        })   
    }catch{
        return res.status(500);
    }
}

module.exports.edit = (req, res) => {
    try{
        var todo = req.body;
        repository.edit(todo, async (err, obj) => {
            console.log('PUT request:', todo, obj);
            if (err) return res.status(500);
            else return res.status(200).json(obj);
        })   
    }catch{
        return res.status(500);
    }
}

module.exports.del = (req, res) => {
    try{
        const id = req.params.id;
        repository.del(id, async (err, obj) => {
            console.log('DELETE request:', obj);
            if (err) return res.status(500);
            else return res.status(200).json(obj);
        })   
    }catch{
        return res.status(500);
    }
}