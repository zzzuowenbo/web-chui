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
var oP1 = document.querySelector('.top-nav-list2 .other p');
var oAll1 = document.querySelectorAll('#box1 .box-item a');
oOther.onclick = function(){
	if(oBox1.style.display == "block"){
		oBox1.style.display = "none";
	}else{
		oBox1.style.display = "block";
    }
    oAll1[0].onclick = function(){
    	oP1.innerHTML = "全部主题";
    	oBox1.style.display = "none";
    }
    oAll1[1].onclick = function(){
    	oP1.innerHTML = "投票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oBox1.style.display = "none";
    }
}
// 全部主题下拉框结束

// 其他标签下拉框开始
var oBox2 = document.getElementById('box2');
var oShare = document.getElementById('share');
var oP2 = document.querySelector('.top-nav-list1 .other p');
var oAll2 = document.querySelectorAll('#box2 .box-item a');
oShare.onclick = function(){
	if(oBox2.style.display == "block"){
		oBox2.style.display = "none";
	}else{
		oBox2.style.display = "block";
    }
    oAll2[0].onclick = function(){
    	oP2.innerHTML = "分享&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oBox2.style.display = "none";
    }
    oAll2[1].onclick = function(){
    	oP2.innerHTML = "软件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oBox2.style.display = "none";
    }
    oAll2[2].onclick = function(){
    	oP2.innerHTML = "游戏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oBox2.style.display = "none";
    }
}
// 其他标签下拉框结束

// 选择主题分类下拉框开始
var oType = document.getElementById('type');
var oFrame = document.getElementById('frame');
var oSpan = document.querySelector('.frame span');
var oA = document.querySelectorAll('#type .box-item a');
oFrame.onclick = function(){
	if(oType.style.display == "block"){
		oType.style.display = "none";
	}else{
		oType.style.display = "block";
    }
    oA[0].onclick = function(){
    	oSpan.innerHTML = "讨论&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oType.style.display = "none";
    }
    oA[1].onclick = function(){
    	oSpan.innerHTML = "教程&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oType.style.display = "none";
    }
    oA[2].onclick = function(){
    	oSpan.innerHTML = "问答&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oType.style.display = "none";
    }
    oA[3].onclick = function(){
    	oSpan.innerHTML = "开箱&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oType.style.display = "none";
    }
    oA[4].onclick = function(){
    	oSpan.innerHTML = "分享&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oType.style.display = "none";
    }
    oA[5].onclick = function(){
    	oSpan.innerHTML = "软件&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oType.style.display = "none";
    }
    oA[6].onclick = function(){
    	oSpan.innerHTML = "游戏&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    	oType.style.display = "none";
    }
}
// 选择主题分类下拉框结束

//下拉版块效果
isCoursel();
function isCoursel(){
	var oBd = document.getElementById('bd');
	var oArea = document.getElementById('area');
	oBd.onmouseenter = function(){
		animate(oArea,{height:536},false,function(){
			oArea.style.display = "block";
		});
	}
	oBd.onmouseleave = function(){
		animate(oArea,{height:0},false,function(){
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
