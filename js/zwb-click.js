// 点击切换图片开始
/*var oDot = document.querySelectorAll('#ul1 li');
for(var i=0;i<oDot.length;i++){
	oDot[i].onclick = function(){
		for(var j=0;j<oDot.length;j++){
				oDot[j].className = "";
		} 
		this.className = "active";
	} 
}*/
    function tab(){
    	for(var i=0;i<aImg.length;i++){
			aImg[i].style.zIndex = 0;
			aBtns[i].className = "";
			// aImg[i].style.display = "none";
		}
		aImg[nowIndex].style.zIndex = 99;
		aBtns[nowIndex].className = "active";
		// aImg[nowIndex].style.display = "block";
    }

	var aImg = document.querySelectorAll('.hide li');
	var oLeft = document.querySelector('.left');
	var oRight = document.querySelector('.right');
	var aBtns = document.querySelectorAll('.dot li');
	var oBox = document.querySelector('.kind');

	var nowIndex = 0;
	oRight.onclick = function(){
		nowIndex++;
		if(nowIndex >= aImg.length){
			nowIndex = 0;
		}
		tab();
	}

	oLeft.onclick = function(){
		nowIndex--;
		if(nowIndex < 0){
			nowIndex = aImg.length - 1;
		}
		tab();
	}

	for(var j=0;j<aBtns.length;j++){
		aBtns[j].index = j;
		aBtns[j].onclick = function(){
            nowIndex = this.index;
            tab();
		}
	}
// 点击切换图片结束
