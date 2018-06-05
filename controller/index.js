var express = require("express");
var router = express.Router(); 

var cat = require("../model/category");
var pro = require("../model/product");

router.get("/", function(req,res){
cat.find(function(err,result){
var pagedata={data:result,prod:pro.getAll,pagename:"index/index",title:"home page"};
res.render("layout",pagedata);
});

});

module.exports=router;