### 用Post请求创建资源

```javascript
http.createServer(function(req,res){
  req.on("data",function(data){
    console.log("parsed",data);  
  });
  req.on("end",function(){
    console.log("done parse!");
    res.end();
  });
}).listen(3000,function(){
  console.log("server is runing...");
})
```

默认情况下data事件返回的是Buffer对象，这是Node版的字节数组，也就是二进制数据，

如果需要字符串，则需要使用utf8编码

`req.setEncoding("uft8")`

可以通过`req.method`获的请求类型

- Get
- Post
- Put
- Delete

为了提高响应的速度，可以带着`Content-Lenght`一并发送，响应主体在内存中提前构建好，使用Content-Length,会默认禁用Node的块编码，从而提高速度

**注**.Content-Lenght不是字符串的长度，而是字符串所占的字节数,字节长度，不是字符长度

**正确**:`var content-length=Buffer.byteLength(str);`

**错误**:`var content-length=str.length;`

### stream.pipe()优化数据传输

将a.txt的内容写入b.txt

```javascript
var readStream=fs.createReadStream("a.txt");
var writeStream=fs.createWriteStream("b.txt");
readStream.pipe(writeStream);
```

所有的readStream都能接受一个writeStream,http的

request请求就是一个readStream

response响应是一个writeStream

可以使用req.pipe(fs.createWriteStream("log.txt"));

```javascript
//简化服务器的实现
http.createServer(function(req,res){
  var root=__dirname;
  var path=url.parse(req.url).pathname;
  fs.createReadStream(path.join(root,path)).pipe(res);
})
```

**注意**`res.end()`会在`stream.pipe()`内部调用

这只是一个简单的文件服务器，还应该添加错误处理机制

## 异常处理

所有继承EventEmitter的类都可能发出error事件，例如`fs.createReadStream(path)`如果文件不存在，或者文件不允许访问，这个方法会报错，所以我们应该添加一个监听器，来处理这些异常。

```javascript
var stream=fs.createReadStream(path);
stream.pipe(res);
stream.on("error",function(err){
  console.log("error !");
})

```

#### fs.stat()方法

获取文件的信息使用案例

```javascript
fs.stat(relativePath,function(err,stat){
		if(err){
			console.log(err.code);
            //一个错误的全局返回码，node官网可查
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
            //stat对象可以获取到文件的大小
			res.setHeader("Content-Length",stat.size);
			let stream=fs.createReadStream(relativePath);
			stream.pipe(res);
			stream.on("error",function(err){
				res.statusCode=500;
				res.end("500 internal error!!");
			})
		}
	})	
```

### 从表单中接收用户输入

新建一个简单的表单

```html
<form method="post" action="/"> 
	<p><input type="text" name="item"></p>
	<p><input type="submit" value="add item"></p>
</form>
```

#### 怎么获取post的数据

当点击add item按钮时向/地址发送请求，后端js代码为

```javascript
//获取post的数据
var fs=require("querystring");
var data="";
req.setEncoding("utf8");
req.on("data",function(chunk){
  data+=chunk;
})
//通过qs.parse(str)可以将一个查询字符串解析成字符串
var item=qs.parse(url).item;
console.log(item);
```

























