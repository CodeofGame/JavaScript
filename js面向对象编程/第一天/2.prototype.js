//给每个函数都添加一个方法<1>
Function.prototype.add=function(){
	console.log("add");
}

/*不允许使用第一种方式
因为污染了原生的Funtion，别人创建的函数被你创建的函数污染
var x=function(){};
x.add(); */

Function.prototype.addMethod=function(name,fn){
	this[name]=fn;
	//为了链式调用
	return this;
}


var x=function(){};

//链式添加方法
x.addMethod("add",function(){
	console.log("add1");
	return this;
}).addMethod("del",function(){
    console.log("del");
	return this;
});

x.add().del();