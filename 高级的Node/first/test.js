var assert = require("assert");

var CountStream = require("./streamcounts");

var countstream = new CountStream("example");



var fs = require("fs");

var passed = 0;


countstream.on("total", function (count) {
    assert.equal(count, 1);
    passed++;
})

console.log(__filename);
fs.createReadStream(__filename).pipe(countstream);

process.on("exit", function () { 
    console.log("count:"+passed);
});
