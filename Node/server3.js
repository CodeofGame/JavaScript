var http=require("http");
var items=[];
http.createServer(function(req,res){
  switch(req.method){
    case "POST":
      var item="";
      req.setEncoding("utf8");
      req.on("data",function(chunk){
        item += chunk;
      });
      req.on("end",function(){
        items.push(item);
        res.end("ok!");
      });
      break;
    case "GET":
      var body=items.map(function(item,i){
        return `(${i}:${item})`;
      }).join("\n");
      res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8",
        "Content-Length":Buffer.byteLength(body)
      });
      res.end(body);
      break;
            
  }
}).listen(3000,function(){
  console.log("server is runing...");
})