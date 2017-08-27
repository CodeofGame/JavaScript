var CountStream = require("./streamcounts");

var countStream = new CountStream("book");

var http = require("http");

http.get("http://localhost:3000", function (res) {
    res.pipe(countStream);
})

countStream.on("total", function (count) {
    console.log("Total match:" + count);
})