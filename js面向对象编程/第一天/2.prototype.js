//��ÿ�����������һ������<1>
Function.prototype.add=function(){
	console.log("add");
}

/*������ʹ�õ�һ�ַ�ʽ
��Ϊ��Ⱦ��ԭ����Funtion�����˴����ĺ������㴴���ĺ�����Ⱦ
var x=function(){};
x.add(); */

Function.prototype.addMethod=function(name,fn){
	this[name]=fn;
	//Ϊ����ʽ����
	return this;
}


var x=function(){};

//��ʽ��ӷ���
x.addMethod("add",function(){
	console.log("add1");
	return this;
}).addMethod("del",function(){
    console.log("del");
	return this;
});

x.add().del();