class EndView extends ui.EndViewUI{
    constructor(){
        super();

        this.replayBut.y=this.height+this.replayBut.height;
        this.replayBut.rotation=720;
    }

    public setNum(num:number){
        this.numText.text=num.toString();
    }

    public butIn(){
        Laya.Tween.to(this.replayBut,{y:835,rotation:0},1000,Laya.Ease.backInOut);
    }

    public butOut(callback:Function,caller:Object){
        Laya.Tween.to(this.replayBut,{y:this.height+this.replayBut.height,rotation:720},1000,Laya.Ease.backInOut,new Laya.Handler(caller,callback));
    }
}