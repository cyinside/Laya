class Butview extends laya.ui.View{
    constructor(){
        super();
        this.onCreateScene();
    }

    private but1:Laya.Sprite;
    private butRole:Laya.Sprite;
    private butRes:Array<any>=
    [
        {url:'gameSence/paper.png'},
        {url:'gameSence/scissors.png'},
        {url:'gameSence/rock.png'}
    ]
    private onCreateScene(){
        this.but1 = new Laya.Sprite();
        this.but1.loadImage("gameSence/selectBtn.png");
        this.addChild(this.but1);

        this.butRole = new Laya.Sprite();
        this.butRole.x=25;
        this.butRole.y=40;
        this.addChild(this.butRole);
    }

    public setRole(num:number=0){
        this.butRole.graphics.clear();
        this.butRole.loadImage(this.butRes[num].url);
        console.log(num)
    }
}
