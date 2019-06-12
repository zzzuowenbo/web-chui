//1.处理购物车
handlecart();
function handlecart(){
	oCart=document.querySelector('.daohang1 .right .cart-box');
	console.log(oCart)
	oRight2=document.querySelector('.daohang1 .right .right2');
	oCartContent=document.querySelector('.top .cart .cart-content');
	oEmptycart=document.querySelector('.top .cart .empty-cart')

	oCart.onmouseenter=function(){
		oRight2.style.display='block';
		animation1(oRight2,'opacity',100)
	}
	oCart.onmouseleave=function(){
		oRight2.style.display='none';
		animation1(oRight2,'opacity',0)
	}
}