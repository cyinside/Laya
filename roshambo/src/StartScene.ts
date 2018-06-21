class StartScene extends ui.StartSceneUI{
    constructor(){
        super();

        this.startBut.y=this.height+this.startBut.height;
        this.startBut.rotation=720; 
        this.startBut.on(Laya.Event.CLICK,this,this.butOut);

        this.butIn();
    }

    private changeScene(){
        this.event("changeScene");
    }
    
    public butIn(){
        Laya.Tween.to(this.startBut,{y:835,rotation:0},1000,Laya.Ease.backInOut);
    }

    public butOut(){
        Laya.Tween.to(this.startBut,{y:this.height+this.startBut.height,rotation:720},1000,Laya.Ease.backInOut,new Laya.Handler(this,this.changeScene));
    }
}