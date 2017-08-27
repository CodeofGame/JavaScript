function Book(id,name,page){
	this.id=id;
    this.name=name;
	this.page=page;
}

Book.prototype.display=function(){
	console.log("display");
}

Book.Name="wangmazi1";

var x=new Book();
x.Name;

