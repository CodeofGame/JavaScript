

var name="王大锤";

function getGender(cardId){
	var gender=cardId.substring(16,17);
	if(gender%2===0){
		console.log("我是女孩！");
	}
	else{
		console.log("我是男孩！");
	}	
}

exports.getGender=function(cardId){
	getGender(cardId);
}