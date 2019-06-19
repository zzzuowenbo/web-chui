//点击切换图片轮播图
isCoursel();
function isCoursel(){
	new Coursel({
		id:"box",
		width:1349,
		height:962,
		img:["./image/zwb-z1.png","./image/zwb-z2.png","./image/zwb-z3.png","./image/zwb-z4.png","./image/zwb-z5.png","./image/zwb-z6.png","./image/zwb-z7.png","./image/zwb-z8.png"],
		playtime:1000
	});
}

//购物车效果
isCart();
function isCart(){
	var oCart = document.getElementById('cart');
	var oHeaderItem = document.getElementById('header-item1');
	var oIcon = document.querySelector('.header-item1 .box');
	oHeaderItem.onmouseenter = function(){
		oIcon.style.color = "#e9eaee";
		animate(oCart,{height:320},true,function(){
			oCart.style.display = "block";
		});
	}
	oHeaderItem.onmouseleave = function(){
		oIcon.style.color = "#9093a7";
		animate(oCart,{height:0},true,function(){
			oCart.style.display = "none";
		});		
	}
}

//顶部导航显示部分
isShowNav();
function isShowNav(){
	var oFix = document.getElementById('fix');
	var isShow = false;
	window.onscroll = function(){
        var iTop = getScroll();    
        if(iTop >= 40){
        	if(!isShow){
        		animation(oFix,"height",40);
        		isShow = true;
        	}       	
        }else{
        	if(isShow){
        		animation(oFix,"height",0);
        		isShow = false;
        	}        	
        }
	}
}