var http=require("http");
var url=require("url");
var path=require("path");
var fs=require("fs");
http.createServer(function(req,res){
	var root=__dirname;
	let pathName=url.parse(req.url).pathname;
    let relativePath=path.join(root,pathName);
    fs.stat(relativePath,function(err,stat){
		if(err){
			console.log(err.code);
			if(err.code=="ENOENT"){
				res.statusCode=404;
				res.end("Not Found!!");
			}
			else{
				res.statusCode=500;
				res.end("500 internal error!!");
			}
		}
		else{
			res.setHeader("Content-Length",stat.size);
			let stream=fs.createReadStream(relativePath);
			stream.pipe(res);
			stream.on("error",function(err){
				res.statusCode=500;
				res.end("500 internal error!!");
			})
		}
	})	
}).listen(3000);