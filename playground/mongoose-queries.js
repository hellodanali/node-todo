const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5a9dd0dc7384da0ea082f1d0';

if (!ObjectID.isValid(id)) {
	console.log('ID not valid');
	return;
}

// Todo.find({ _id: id }).then(todos => console.log('Todos:', todos));
//
// Todo.findOne({ _id: id }).then(todo => console.log('Todo:', todo));

Todo.findById(id)
	.then(todo => {
		if (!todo) {
			return console.log('ID not found');
		}
		console.log('Todo by id:', todo);
	})
	.catch(e => console.log(e));
