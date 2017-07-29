var http=require("http");
var qs=require("querystring");
var items=[];

http.createServer(function(req,res){
	if(req.url=="/"){
		switch(req.method)
		{
			case "GET":
				show(res);
				break;
		    case "POST":
				add(req,res);
				break;
			default:
			    badRequest(res);
		}
	}
	else{
		notFound(res);
	}
}).listen(3000,function(){
	console.log("server is running....");
})

function show(res){
	var itemsStr=items.map(function(item){
						return "<li>"+item+"</li>";
						}).join("");
	var html=`
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8">
			</head>
			<body>
				<h1>To-Do List</h1>
				<ul>
					${itemsStr}
				</ul>
				<form method="post" action="/"> 
					<p><input type="text" name="item"></p>
					<p><input type="text" name="name"></p>
					<p><input type="submit" value="add item"></p>
				</form>
			</body>
		</html>
	`;
	res.writeHead(200,{
		"Content-Type":"text/html;charset=utf-8",
		"Content-Lenght":Buffer.byteLength(html)
	});
	res.end(html);
}

function add(req,res){
	var data="";
	req.setEncoding("utf8");
	req.on("data",function(chunk){
		data+=chunk;
	})
	req.on("end",function(){
		console.log(data);
	    let item=qs.parse(data).item;
		items.push(item);
		show(res);
	})
}


function notFound(res){
	res.writeHead(404,{
		"Content-Type":"text/plain"
	});
	res.end("Not Found!");
}

function badRequest(res){
	res.writeHead(500,{
		"Content-Type":"text/plain"
	});
	res.end("Bad Request!");
}

