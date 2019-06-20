function tab(){
        for(var i = 0;i<aImg.length;i++){
            aImg[i].style.zIndex = '0';
            aBtn[i].className = '';
            aImg[i].style.opacity = '0';
        }
        aImg[now].style.zIndex = '99';
        aImg[now].style.opacity = '1';
        aBtn[now].className = 'active';
    }
    //2.添加下一张事件
    oRightArrow.onclick = function(){
        now++;
        if(now >= aImg.length){
            now = 0;
        }
        tab();
    }
    //3.添加下一张事件
    oLeftArrow.onclick = function(){
        now--;
        if(now < 0){
            now = aImg.length - 1;
        }
        tab();  
    }
    //4.底部指示按钮事件
    for(var i = 0;i<aBtn.length;i++){
        aBtn[i].index = i;
        aBtn[i].onclick = function(){
            now = this.index;
            tab();
        }
    }
    //5.自动播放
    timer = setInterval(oRightArrow.onclick,5000);
    oCarousel.onmouseover = function(){
        clearInterval(timer);
    }
    oCarousel.onmouseout = function(){
        timer = setInterval(oRightArrow.onclick,5000);
    }