// 搜索下拉框开始
var oSelect = document.getElementById('select');
var oClick = document.getElementById('click');
oClick.onclick = function(){
	if(oSelect.style.display == "block"){
		oSelect.style.display = "none";
	}else{
		oSelect.style.display = "block";
    }
}
// 搜索下拉框结束

// 全部主题下拉框开始
var oBox1 = document.getElementById('box1');
var oOther = document.getElementById('other');
oOther.onclick = function(){
	if(oBox1.style.display == "block"){
		oBox1.style.display = "none";
	}else{
		oBox1.style.display = "block";
    }
}
// 全部主题下拉框结束

// 其他标签下拉框开始
var oBox2 = document.getElementById('box2');
var oShare = document.getElementById('share');
oShare.onclick = function(){
	if(oBox2.style.display == "block"){
		oBox2.style.display = "none";
	}else{
		oBox2.style.display = "block";
    }
}
// 其他标签下拉框结束

// 选择主题分类下拉框开始
var oType = document.getElementById('type');
var oFrame = document.getElementById('frame');
oFrame.onclick = function(){
	if(oType.style.display == "block"){
		oType.style.display = "none";
	}else{
		oType.style.display = "block";
    }
}
// 选择主题分类下拉框结束