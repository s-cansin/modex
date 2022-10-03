const router = require("express").Router();
const register = require("./auth/register.js");

router.post("/register", register);



module.exports = router;