//1.处理购物车
handlecart();
function handlecart(){
	oCart=document.querySelector('.daohang1 .right .cart-box');
	oRight2=document.querySelector('.daohang1 .right .right2');
	oCartContent=document.querySelector('.top .cart .cart-content');
	oEmptycart=document.querySelector('.top .cart .empty-cart')
	console.log(oCartContent)

	oCart.onmouseenter=function(){
		oRight2.style.display='block';
		animation1(oRight2,'opacity',100)
	}
	oCart.onmouseleave=function(){
		oRight2.style.display='none';
		animation1(oRight2,'opacity',0)
	}
}
//2.处理下拉列表
handleNav();
function handleNav(){
	var oList=document.querySelectorAll('.beijingyanse .daohang2 .item1 .item2');
	var oBigBox=document.querySelector('.juzhong');
	var	oNavContent=document.querySelectorAll('.juzhong .nav-content');
	console.log(oNavContent)

	oList[0].onmouseenter=function(){
		oBigBox.style.height='300px'
		oNavContent[0].style.display='block';
	}
	oList[1].onmouseenter=function(){
		oBigBox.style.height='300px'
		oNavContent[0].style.display='none';
		oNavContent[1].style.display='block';
	}
	oList[2].onmouseenter=function(){
		oBigBox.style.height='300px'
		oNavContent[0].style.display='none';
		oNavContent[1].style.display='none';
		oNavContent[2].style.display='block';
	}
	oList[3].onmouseenter=function(){
		oBigBox.style.height='300px'
		oNavContent[0].style.display='none';
		oNavContent[1].style.display='none';
		oNavContent[2].style.display='none';
		oNavContent[3].style.display='block';
	}
	oList[4].onmouseenter=function(){
		oBigBox.style.height='300px'
		oNavContent[0].style.display='none';
		oNavContent[1].style.display='none';
		oNavContent[2].style.display='none';
		oNavContent[3].style.display='none';
		oNavContent[4].style.display='block';
	}
	oList[5].onmouseenter=function(){
		oBigBox.style.height='300px'
		oNavContent[0].style.display='none';
		oNavContent[1].style.display='none';
		oNavContent[2].style.display='none';
		oNavContent[3].style.display='none';
		oNavContent[4].style.display='none';
		oNavContent[5].style.display='block';
	}
	oList[6].onmouseenter=function(){
		oBigBox.style.height='300px'
		oNavContent[0].style.display='none';
		oNavContent[1].style.display='none';
		oNavContent[2].style.display='none';
		oNavContent[3].style.display='none';
		oNavContent[4].style.display='none';
		oNavContent[5].style.display='none';
		oNavContent[6].style.display='block';
	}
	oList[7].onmouseenter=function(){
		oBigBox.style.height='300px'
		oNavContent[0].style.display='none';
		oNavContent[1].style.display='none';
		oNavContent[2].style.display='none';
		oNavContent[3].style.display='none';
		oNavContent[4].style.display='none';
		oNavContent[5].style.display='none';
		oNavContent[6].style.display='none';
		oNavContent[7].style.display='block';
	}
	oBigBox.onmouseleave=function(){
		oBigBox.style.height="0px";
	}
}
//加载轮播图
handleCoursel();
function handleCoursel(){
	new Coursel({//传入一个对象作为参数
		id:'coursel',
		width:1236,
		height:461,
		img:["image/lyc-img/coursel1.png","image/lyc-img/coursel2.png"],
		playtime:2000
	});
}

//滑动商品
handleShopping();
function handleShopping(){
	var oLeft=document.querySelector('.remen .remen1 .col-right .icir1');
	var oRight=document.querySelector('.remen .remen1 .col-right .icir2');
	var oHuaDong=document.querySelector('.remen .remen2');
	console.log(oLeft)

	oLeft.onclick=function(){
		oHuaDong.style.marginLeft="-1220px";
	}
	oRight.onclick=function(){
		oHuaDong.style.marginLeft="0";
	}
}


//document.getElementById("message").setAttribute("placeholder","新文本内容");
//搜索框
handleSerach();
function handleSerach(){
	var oSearch1=document.querySelector('.daohang2 .search1')
	// console.log(oSearch1.placeholer.value)
	oSearch1.onfocus=function(){
		oSearch1.placeholer="请输入搜索的商品";
	}
}