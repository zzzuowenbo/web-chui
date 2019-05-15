// 点击圆点按钮开始
var oDot = document.querySelectorAll('#ul1 li');
for(var i=0;i<oDot.length;i++){
	oDot[i].onclick = function(){
		for(var j=0;j<oDot.length;j++){
				oDot[j].className = "";
		} 
		this.className = "active";
	} 
}
// 点击圆点按钮结束
