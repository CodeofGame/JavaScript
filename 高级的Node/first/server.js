var http = require("http");

http.createServer(function (req, res) {
    var html = "<body><h1>book</h1><h1>book</h1><h1>book</h1><h1>book</h1><h1>book</h1></body>";
    res.writeHead(200, {
        "Content-Type": "text/html;charset=utf-8"
    });
    res.end(html)
}).listen(3000, function () {
    console.log("server is running!!");
})