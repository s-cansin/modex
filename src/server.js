const express = require("express");
const User = require("./models/Users.js");
const startDB = require("./utils/mongoose.js");
const router = require("./routes");
const app = express();

app.use(express.json());
app.use(router);


startDB();



app.listen(3001, () => {
	console.log("hello");
});