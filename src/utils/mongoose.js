const mongoose = require("mongoose");

const startDB = () => {
	mongoose.connect("mongodb+srv://db:123456789%21%23@cluster0.bzyopxr.mongodb.net/?retryWrites=true&w=majority")
		.then(() => {
			return console.log("Connected");
		})
		.catch((e) => {
			return console.log("Error: " + e);
		});
};

module.exports = startDB;