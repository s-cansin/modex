const router = require("express").Router();
const User = require("../../models/Users.js");

router.post("/register", (req, res) => {

	const {name, username, password} = req.body;

	try 
	{
		User.create({name, username, password});
	}
	catch(e)
	{
		return res.send("Error: " + e);
	}

	return res.send("Register Completed!" + name + " (" + username + ") Pass:" + password);

});

module.exports = router;