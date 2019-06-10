// 搜索下拉框开始
var oSelect = document.getElementById('select');
var oClick = document.getElementById('click');
// console.log(oClick);
oClick.onclick = function(){
 	oSelect.style.display = "block";
}
oSelect.onmouseleave = function(){
	oSelect.style.display = "none";
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

//下拉版块效果
isCoursel();
function isCoursel(){
	var oBd = document.getElementById('bd');
	var oArea = document.getElementById('area');
	oBd.onmouseenter = function(){
		animate(oArea,{height:536},true,function(){
			oArea.style.display = "block";
		});
	}
	oBd.onmouseleave = function(){
		animate(oArea,{height:0},true,function(){
			oArea.style.display = "none";
		});
	}
}

//选择相应按钮
isBtn();
function isBtn(){
	var aPageItem = document.querySelectorAll('.content .page-list .page-item');
	for(var i=0;i<aPageItem.length;i++){
		aPageItem[i].index = i;
		aPageItem[i].onclick = function(){
			for(var j=0;j<aPageItem.length;j++){
				aPageItem[j].className = "page-item";
			}
			this.className = "page-item active";
		}		
	} 
}

//验证码检验
isCheck();
function isCheck(){
	var oVerify = document.getElementById('intext');
    oVerify.onkeydown = function(ev){
    	if(oVerify.value.length > 5 && ev.keyCode != 8 && ev.keyCode != 37 && ev.keyCode != 39){
        	return false;
        }
    }
}
