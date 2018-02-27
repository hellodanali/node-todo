const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) return console.log('Unabled to connect to MongoDB server.');

	console.log('Connected to MongoDB server.');
	const db = client.db('TodoApp');

	//findOneAndUpdate(filter,update,options,callback)
	// db
	// 	.collection('Todos')
	// 	.findOneAndUpdate(
	// 		{ _id: new ObjectID('5a8e5739da12718e4f6770df') },
	// 		{ $set: { completed: true } },
	// 		{ returnOriginal: false }
	// 	)
	// 	.then(result => {
	// 		console.log(result);
	// 	});

	db
		.collection('Users')
		.findOneAndUpdate(
			{ _id: new ObjectID('5a8e54c0fb8fb108a8edde3a') },
			{ $set: { name: 'Dana Li' }, $inc: { age: -1 } },
			{ returnOriginal: false }
		)
		.then(result => {
			console.log(JSON.stringify(result, undefined, 2));
		});

	// client.close();
});
