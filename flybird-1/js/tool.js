/*
imgUrl = {sky:'images/sky.png',land:'images/land.png',bird:'images/bird.png',pipeUp:'images/pipeUp.png',pipeDown:'images/pipeDown.png'}
imgObj = {
    sky : "<img src='images/sky.pn'>"
    land : "<img src='images/land.pn'>"
    bird : "<img src='images/bird.pn'>"
    pipeUp : "<img src='images/pipeUp.pn'>"
    pipeDown : "<img src='images/pipeDown.pn'>"
}
*/
//整体思路:传进来一个imgUrl对象,在fn回调函数中获得所有的<img src='images/sky.pn'>
function imgLoaded(imgUrl, fn){
    var imgObj = {};
    var oTmepImg = null;
    var loadedNum = imgNum = 0;

    for(var k in imgUrl){
        imgNum++;

        oTmepImg = new Image;
        oTmepImg.src = imgUrl[k];
        imgObj[k] = oTmepImg;

        oTmepImg.onload = function(){
            loadedNum++;
            if(loadedNum === imgNum){
                fn && fn(imgObj);
            }
        }
    }
}