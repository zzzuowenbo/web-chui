// 点击切换图片开始
var oDot = document.querySelectorAll('#ul1 li');
for(var i=0;i<oDot.length;i++){
	oDot[i].onclick = function(){
		for(var j=0;j<oDot.length;j++){
				oDot[j].className = "";
		} 
		this.className = "active";
	} 
}
// 点击切换图片结束
