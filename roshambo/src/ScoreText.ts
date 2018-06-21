class ScoreText extends Laya.Sprite{
    private txt:Laya.Text;
    private clockBitmapFont:Laya.BitmapFont;
    private scoreNum:number=0;
    constructor(){
        super()
        this.loadFont();
    }

    private loadFont(){
        this.clockBitmapFont = new Laya.BitmapFont;
        this.clockBitmapFont.loadFont("res/atlas/font/num.fnt",Laya.Handler.create(this,this.createText))
    }

    private createText(){
        this.clockBitmapFont.setSpaceWidth(10);
        Laya.Text.registerBitmapFont('numberText',this.clockBitmapFont);


        this.txt = new Laya.Text();
        this.txt.text = "0";
        this.txt.width = 250;
        this.txt.wordWrap = true;
        this.txt.align = "center";
        this.txt.font = 'numberText';
        this.txt.fontSize = 70;
        this.txt.pos(0,0);
        this.addChild(this.txt);
    }

     public setNum(){
        this.scoreNum++;

        this.txt.text=this.scoreNum.toString();
    }

    public getScore():number{
        return this.scoreNum;
    }

    public reset(){
        this.scoreNum=0;
        this.txt.text=this.scoreNum.toString();
    }
}