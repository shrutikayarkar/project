var connect = require("../config/connect");
var config = require("../config/db");

module.exports.insert = function(obj,cb) {
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("category").insert(obj,cb);

});
};

module.exports.find = function(cb){
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("category").find().toArray(cb);

});
};

module.exports.remove = function(obj,cb){
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection('category').remove(obj,cb);
});
};

module.exports.findWhere=function(obj, cb){
connect.init(function(err, client){
var db = client.db(config.dbName);
db.collection('category').find(obj).toArray(cb);
});
};

module.exports.updateWhere=function(where, obj, cb){
console.log("..........."+where);
console.log(".+++++++++"+obj);
connect.init(function(err, client){
var db = client.db(config.dbName);
db.collection('category').update(where, {$set : obj}, cb);
});
};












// var getAll=[
// 		{
// 			category:"clothing"	
// 		},

// 		{
// 			category:"accessories"	
// 		},

// 		{
// 			category:"watches"	
// 		},
					
// 		{
// 			category:"home decor"
// 		},

// 		{
// 			category:"footwear"
// 		}
// ]
// module.exports = getAll;
