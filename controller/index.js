var express = require("express");
var router = express.Router(); 

router.get("/", function(req,res){
var pagedata={cate:categ,prod:pro.getAll,pagename:"index/index",title:"home page"};
res.render("layout",pagedata);	//actual pagename in ejs
});

var categ = require("../model/category");
var pro = require("../model/product");

module.exports=router;