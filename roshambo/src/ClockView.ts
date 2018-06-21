class ClockView extends Laya.Sprite{
    constructor(){
        super();
        this.loadFont()
    }

    private clockText:string="numberText";
    private clockImg:Laya.Image;
    private clockBitmapFont:Laya.BitmapFont;
    public clockNum:number=3;
    private txt:Laya.Text;
    private loadFont(){
        this.clockBitmapFont = new Laya.BitmapFont;
        this.clockBitmapFont.loadFont("res/atlas/font/num.fnt",Laya.Handler.create(this,this.createText))
    }

    private createText(){
        this.clockBitmapFont.setSpaceWidth(10);
        Laya.Text.registerBitmapFont(this.clockText,this.clockBitmapFont);

        this.txt = new Laya.Text();
        this.txt.text = this.clockNum.toString();
        this.txt.width = 250;
        this.txt.wordWrap = true;
        this.txt.align = "center";
        this.txt.font = this.clockText;
        this.txt.fontSize = 70;
        this.txt.pos(50,20);
        this.addChild(this.txt);

        this.clockImg  = new Laya.Image();
        this.clockImg.loadImage('gameSence/clock.png');
        this.clockImg.autoSize=true;
        this.clockImg.rotation
        this.clockImg.pos(this.clockImg.width/2-10,this.clockImg.height/2-10)
        this.clockImg.pivot(this.clockImg.width/2,this.clockImg.height/2);
        this.clockImg.scale(0.6,0.6);
        this.addChild(this.clockImg);
    }

    private tweenOn:boolean=false;
    public setNum():Boolean{
        this.clockNum--;
        this.txt.alpha=1;
        if(this.clockNum<10&&this.tweenOn==false){
            this.tweenOn=true;
            this.clockTween1()
        }
        if(this.clockNum<0){
            this.txt.alpha=0;
            return false;
        }

        this.txt.text=this.clockNum.toString();
    }

    private clockTween1(){
        Laya.Tween.clearTween(this.clockImg)
        Laya.Tween.to(this.clockImg,{rotation:-15},400,Laya.Ease.sineInOut,new Laya.Handler(this,this.clockTween2));
    }

    private clockTween2(){
        Laya.Tween.clearTween(this.clockImg)
        Laya.Tween.to(this.clockImg,{rotation:15},400,Laya.Ease.sineInOut,new Laya.Handler(this,this.clockTween1));
    }

    public reset(){
        Laya.Tween.clearTween(this.clockImg);
        this.clockImg.rotation=0;
        this.txt.alpha=1;
        this.clockNum=30;
        this.txt.text=this.clockNum.toString();
        this.tweenOn=false;
    }
}