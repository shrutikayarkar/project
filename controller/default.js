var express = require("express");
var router = express.Router();

router.use('/', require('./index')); 
router.use('/about',require('./about'));
router.use('/contact', require('./contact'));
router.use('/help', require('./help'));
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));
router.use('/admin', require('./admin'));
router.use('/logout', require('./logout'));
router.use('/user', backdoor,require('./user'));

function backdoor(req,res,next)
{
if(!req.session.is_user_logged_in)
	{
		res.redirect("/login");
	}
	next();
}

module.exports=router;