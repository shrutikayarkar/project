var crypto = require('crypto');

module.exports = function (filename) {
var cryptostr = crypto.randomBytes(12).toString("hex");
var arr = filename.split(".");
var ext = arr[arr.length-1];
var newname = cryptostr+"."+ext;
return newname;
};