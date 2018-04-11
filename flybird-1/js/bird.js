function Bird(ctx , oImg , wFps , hFps , x , y){
    this.ctx = ctx;
    this.img = oImg;
    //横向图片帧数
    this.wFps = wFps;
    //纵向图片帧数
    this.hFps = hFps;
    //横向当前帧数
    this.fps = 0;
    //没有纵向帧我们就不定义纵向档期帧数

    //鸟图片单帧宽高
    this.width = this.img.width/this.wFps;
    this.height = this.img.height;
    this.x = x;
    this.y = y;
    //y轴下落速度初始值
    this.speed = 2;
    //y轴下落加速度
    this.speedPlus = 0.5;


}

Bird.prototype = {
    constructor : Bird,

    draw : function(){
        this.ctx.drawImage(this.img , this.width*this.fps , 0 , this.width , this.height, this.x , this.y , this.width , this.height);
    },

    update : function(){
        this.fps++;
        if(this.fps === this.wFps){
            this.fps = 0
        }
        this.y += this.speed;
        this.speed += this.speedPlus;
        this._bindEvent();
    },

    _bindEvent : function(){
        var _this = this;
        _this.ctx.canvas.onclick = function(){
            _this.speed = -3;
        }
    }

}