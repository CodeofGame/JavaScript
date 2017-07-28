var http=require("http");

http.createServer(function(req,res){
  req.setEncoding("utf8");
  req.on("data",function(data){
    console.log(data);     
  });
  req.on("end",function(){
    console.log("done parse!");
    res.end();
  });
}).listen(3000,function(){
  console.log("server is runing...");
})