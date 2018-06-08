var express = require("express");
var router = express.Router();

var pro = require("../model/product");
var cat = require("../model/category");
var newfile = require("../helper/changefilename");
var path = require("path");

router.get("/",function (req,res) {
cat.find(function(err,result){
var pagedata = {title:"add product",pagename:"admin/addproduct",message:req.flash("msg"),catdata:result};
res.render("adminlayout",pagedata);
});
});

router.post("/",function(req,res){
console.log(req.files);
var file = req.files.image;
var newname = newfile(file.name);
var filepath = path.resolve("public/product_image/"+newname);
file.mv(filepath,function(err){
if(err)
{
console.log("something went wrong.....");
return;
}
req.body.image = newname;
console.log(req.body);

pro.insert(req.body,function(err,result){
req.flash("msg","Successfully Added");
res.redirect("/admin/admin_add_product");
});
});
});


module.exports = router;