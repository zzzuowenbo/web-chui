//购物车
handlecart();
function handlecart(){
	oCart=document.querySelectorAll('.daohang1 .right .right1 i');
	oCartBox=document.querySelector('.daohang1 .right .cart-box');
	var hideTimer=0;
	console.log(oCartBox)
	oCart[1].onmouseenter=function(){
		oCartBox.style.display='block';
		animation1(oCartBox,'opacity',100);
	}
	oCart[1].onmouseleave=function(){
		hideTimer=setTimeout(function(){
			oCartBox.style.display='none';
			animation1(oCartBox,'opacity',0)	
		},1000)
		oCartBox.onmouseenter=function(){
			clearTimeout(hideTimer);
		}
		oCartBox.onmouseleave=function(){
			setTimeout(function(){
				oCartBox.style.display='none';
				animation1(oCartBox,'opacity',0)
			},250)
		}
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