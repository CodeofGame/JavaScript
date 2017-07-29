var http=require("http");
var fs=require("fs");
var url=require("url");
var path=require("path");

http.createServer(function(req,res){
	let root=__dirname;
	let pathname=url.parse(req.url).pathname;
	let relativePath=path.join(root,pathname);
	let stream=fs.createReadStream(relativePath)
	stream.pipe(res);
	stream.on("error",function(err){
		res.statusCode=500;
		res.end("server internal error");
	})
}).listen(3000,function(){
	console.log("server is running..");
})