var express = require("express");
var router = express.Router();

router.get("/",function(req,res) {
	res.send("<h1>this is user profile page</h1>")
});

module.exports = router;