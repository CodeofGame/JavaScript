var check=function(){};
//<1>
check.add=function(){
	console.log("add");
}
check.del=function(){
		console.log("del");
}


//check.add();
//<2>
var newCheck=function(){
	//返回一个对象
	return {
		add:function(){
		console.log("add");
		},
		del:function(){
		console.log("del");
		}
	}
}

//<3>
function Check(){
	this.add=function(){
		this.del();
		console.log("add");
	}
	
	this.del=function(){
		console.log("del");
	}
}

//<4>使用原型链
function CheckTwo(){
	
}

CheckTwo.prototype={
	add:function(){
		console.log("add");
		},
	del:function(){
		console.log("del");
	}
}
/* 第一部分的调用
var x=new check();

x.add();  */

/* 第二部分的调用这里check与newCheck没有任何的关系，虽然使用了关键字new，但并不是真正意义上的类
 var check=new newCheck();
check.add(); */

/*  第三部分的调用
面向对象的写法,但是通过第三种方式创建的对象,都具有相同的方法和属性
很消耗内存
var check1=new Check();
var check2=new Check();*/



/* 调用的方式与上面几种是相同的，但是通过这种方式创建的对象拥有相同的方法
因为他们都要依赖原型链上去找方法和属性，创建的对象都绑定在checkTwo的原型上。 */




