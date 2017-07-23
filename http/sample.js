let http=require("http");

http.request({
	"host":"127.0.0.1",
	"port":"3000"	
},function(res){
	let body="";
	res.setEncoding("utf8");
	res.on("data",function(data){
		body+=data;
	})
	
	res.on("end",function(){
		console.log(body);
	})
}).end();