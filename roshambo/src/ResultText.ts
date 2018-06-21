class ResultText extends Laya.Sprite{
    constructor(){
        super();
        this.create();
    }

    private resulet:Laya.Text;
    private create(){
        this.resulet = new Laya.Text;
        this.resulet.text="sss";
        this.resulet.color = "#ffffff";  
        this.resulet.fontSize=60;
        this.resulet.bold=true;
        this.addChild(this.resulet);
    }

    public setText(state:number){
        var txt:string = "";
        switch(state){
            case 1:
            txt="Bingo!!";
            this.resulet.color='#cce198';
            break;
            case 0:
            txt="Noooo!!";
            this.resulet.color='#ec6941';
            break;
        }
        this.resulet.text = txt;
    }
}