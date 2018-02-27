const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) return console.log('Unabled to connect to MongoDB server.');

	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');

	// db
	// 	.collection('Todos')
	// 	.find()
	// 	.toArray()
	// 	.then(
	// 		docs => {
	// 			console.log('Todos');
	// 			console.log(JSON.stringify(docs, undefined, 2));
	// 		},
	// 		err => {
	// 			console.log('Unabled to fetch todos', err);
	// 		}
	// 	);
	db
		.collection('Todos')
		.find()
		.count()
		.then(
			count => {
				console.log(`Todos count: ${count}`);
			},
			err => {
				console.log('Unabled to fetch todos', err);
			}
		);

	// client.close();
});
