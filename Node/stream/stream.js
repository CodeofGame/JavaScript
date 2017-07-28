var http=require("http");
var fs=require("fs");
var url=require("url");
var path=require("path");

http.createServer(function(req,res){
	//浏览器自己发起获取icon的请求，干扰开发favicon.ico
	//最基本的readStream读取文件
	/* if(req.url=="/favicon.ico"){
		res.end();
	}
	else{
		let root=__dirname;
		let pathname=url.parse(req.url).pathname;
		let relativePath=path.join(root,pathname);
		let stream=fs.createReadStream(relativePath);
		stream.on("data",function(chunk){
			res.write(chunk);
		})
		stream.on("end",function(){
			res.end();
		})
	} */
	//还用stram.pipe()优化数据传输
	let root=__dirname;
	let pathname=url.parse(req.url).pathname;
	let relativePath=path.join(root,pathname);
	fs.createReadStream(relativePath).pipe(res);
}).listen(3000,function(){
	console.log("server is running..");
})