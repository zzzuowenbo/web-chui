shensuo();
function shensuo(){
	var oPro2s=document.getElementById("Pro2s");
	var oZaiXian=document.getElementById("zaixian");
	var oTNT=document.getElementById("TNT");
	var oOS=document.getElementById("OS");
	oPro2s.onmouseenter=function(){
		oPro2s.style.marginLeft = '1px';
		oPro2s.style.marginRight = '39px';
		oZaiXian.style.marginLeft="55px";
	}
	oPro2s.onmouseleave=function(){
		oPro2s.style.marginLeft = '0px';
		oPro2s.style.marginRight = '38px';
		oZaiXian.style.marginLeft="56px";
	}
	oOS.onmouseenter=function(){
		oTNT.style.marginRight="39px";
		oOS.style.marginLeft = '1px';
		oOS.style.marginRight = '39px';
		oZaiXian.style.marginLeft="55px";
	}
	oOS.onmouseleave=function(){
		oTNT.style.marginRight="38px";
		oOS.style.marginLeft = '0px';
		oOS.style.marginRight = '38px';
		oZaiXian.style.marginLeft="56px";
	}
	var oI1=document.querySelector(".i1");
	var oHaveFa=document.querySelector(".hovefa");
	var oHave=document.querySelector(".hove");
	oI1.onmouseenter=function(){
		oHave.style.display = 'block';
		oHave.style.overflow = '';
		oHaveFa.style.zIndex = 100;
	}
	oHaveFa.onmouseleave=function(){
		oHave.style.display = 'none';
		oHave.style.overflow = 'hidden';
	}
	var oBox2=document.querySelector(".box2");
	var oBox=document.querySelector(".box");
	window.onscroll=function(){
		oBox2.style.position = 'fixed';
		oBox2.style.top="0";
		if(document.documentElement.scrollTop<92){
			oBox2.style.position = 'absolute';
			oBox2.style.top="92px";
		}
	}
	
}