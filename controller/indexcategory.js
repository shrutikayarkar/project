var express = require("express");
var router = express.Router();

var cat = require("../model/category");
var pro = require("../model/product");
var mongodb = require("mongodb");

router.get("/:category/:id",function (req,res) {
console.log(req.params);
var cid = req.params.id;
pro.findWhere({productcategory:cid},function(err,result){
var prodata = result;
cat.find(function(err,result){

var pagedata = {title:"category details",pagename:"index/index",data:prodata,data1:result};
res.render("layout",pagedata);
});
});
});

module.exports = router;