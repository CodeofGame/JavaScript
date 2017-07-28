let http=require("http");
http.createServer(function(req,res){
  var body=`
  <form>
    <input type="input">
    <select>
      <option>中国</option>
      <option>美国</option>
    </select>
  </form>`;
  res.setHeader("Content-Type","text/html;charset=utf-8");
  res.setHeader("Content-Length",body.length);
  res.statusCode=200;
  res.end(body);
}).listen(3000,function(){
  console.log("server is runing...");
})
