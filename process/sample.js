process.stdout.write("whats your name?");

process.stdin.resume();

process.stdin.setEncoding("utf-8");

process.stdin.on("data",function(data){
	console.log(data);
})
