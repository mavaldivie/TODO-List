const controller = require('./controllers/todo');
const mongoose = require('mongoose');

const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors');
const app = express()
const port = 3001

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', controller.getAll);

app.get('/:id', controller.getById);

app.post('/', controller.add);

app.put('/', controller.edit);

app.delete('/:id', controller.del);

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})


mongoose.connect('mongodb://localhost:27017/test');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.once("open", function callback() {
  console.log("Db Connected");
});
