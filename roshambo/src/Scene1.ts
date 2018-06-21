import Particle2D = Laya.Particle2D;
import ParticleSetting = Laya.ParticleSetting;
class Scene1 extends ui.Scene1UI{
    private bg:Laya.Image;
    private butView0:Butview;
    private butView1:Butview;
    private butView2:Butview;
    private clockView:ClockView;
    private butBox:Laya.Sprite;
    private user_state:number=0;
    private pc_staet:number=0;
    private require_state:number=0;
    private sp: Particle2D;
    private scoreText:ScoreText;
    private game_state:number=0;
    private endView:EndView;
    private blackView:Laya.Sprite;
    private endTweenTxt:Laya.Text;
    constructor(){
        super()
        Laya.loader.load('star.part',new Laya.Handler(this,this.createScene),null, Loader.JSON);
    }

    private createScene(settings: ParticleSetting){
            this.bg = new Laya.Image;
            this.bg.loadImage('res/page2.jpg');
            this.addChild(this.bg);

            this.butBox = new Laya.Sprite();
            this.butBox.pos(30,800);
            this.addChild(this.butBox);

            this.butView0 = new Butview();
            this.butView0.setRole();
            this.butView0.mouseEnabled=true;
            this.butBox.addChild(this.butView0);
            
            this.butView1 = new Butview();
            this.butView1.setRole(1);
            this.butView1.pos(200,0);
            this.butView1.mouseEnabled=true;
            this.butBox.addChild(this.butView1);

            this.butView2 = new Butview();
            this.butView2.setRole(2);
            this.butView2.pos(400,0);
            this.butView2.mouseEnabled=true;
            this.butBox.addChild(this.butView2);

            this.clockView = new ClockView;
            this.clockView.pos(0,10);

            this.scoreText = new ScoreText;
            this.scoreText.scale(1.5,1.5);
            this.scoreText.pos(340,20)
            this.addChild(this.scoreText);

            this.removeAllpcRole();
            
            this.changeRole();

            this.sp = new Particle2D(settings);
            this.sp.stop();
            this.sp.pos(Laya.stage.width/2,700);
            this.addChild(this.sp);

            this.blackView = new Laya.Sprite;
            this.blackView.graphics.drawRect(0, 0, 640, 1130, "#000000");
            this.blackView.alpha=0;
            this.addChildAt(this.blackView,5);
            this.addChildAt(this.clockView,6);

            this.endTweenTxt = new Laya.Text;
            this.endTweenTxt.text="时 间 到";
            this.endTweenTxt.color='#ffffff';
            this.endTweenTxt.fontSize=60;
            this.endTweenTxt.pos(250,500);
            // this.endTweenTxt.scale(0,0);
            this.endTweenTxt.alpha=0;
            this.addChildAt(this.endTweenTxt,6); 

            this.endView = new EndView;
            this.endView.alpha=0;

            this.endView.replayBut.on(Laya.Event.CLICK,this,this.clickHanlde);

            console.log("numChildren"+this.numChildren);
    }

    private clickHanlde(e:Laya.Event){
        switch(e.target){
            case this.endView.replayBut:
            this.endView.butOut(this.restart,this);
            return;
            case this.butView0:
            this.user_state=Role.PAPER;
            break;
            case this.butView1:
            this.user_state=Role.SCISSORS;
            break;
            case this.butView2:
            this.user_state=Role.ROCK;
            break;
        }
        this.compareState(this.user_state,this.pc_staet);
    }

    private changeRole(){
        this.removeAllpcRole();

        this.pc_staet=this.getRandom1();
        this.require_state=this.getRandom2();

        switch(this.pc_staet){
            case Role.PAPER:
            this.addChildAt(this.pcRole0,3);
            break;
            case Role.SCISSORS:
            this.addChildAt(this.pcRole1,3);
            break;
            case Role.ROCK:
            this.addChildAt(this.pcRole2,3);
            break;
        }
        switch(this.require_state){
            case GameState.LOSE:
            this.addChildAt(this.cueImg0,3);
            break;
            case GameState.WIN:
            this.addChildAt(this.cueImg1,3);
            break;
            case GameState.DRAW:
            this.addChildAt(this.cueImg2,3);
            break;
        }
        console.log("require_state"+this.require_state);
    }

    private cheakRepeat1:number=-1;
    private cheakRepeat2:number=-1;
    private getRandom1(){
        var pcState:number=~~(Math.random()*3);
        if(pcState==this.cheakRepeat1){
            pcState=~~(Math.random()*3)
        }else{
            this.cheakRepeat1=pcState;
        }
        return pcState;
    }

    private getRandom2(){
        var requireState:number=~~(Math.random()*3);
        if(requireState==this.cheakRepeat2){
            requireState=~~(Math.random()*3)
        }else{
            this.cheakRepeat2=requireState;
        }
        return requireState;
    }

    private removeAllpcRole(){
       if(this.contains(this.pcRole0))
            this.removeChild(this.pcRole0);
        
        if(this.contains(this.pcRole1))
            this.removeChild(this.pcRole1);
        
        if(this.contains(this.pcRole2))
            this.removeChild(this.pcRole2);

        if(this.contains(this.cueImg0))
            this.removeChild(this.cueImg0);

        if(this.contains(this.cueImg1))
            this.removeChild(this.cueImg1);

        if(this.contains(this.cueImg2))
            this.removeChild(this.cueImg2);        
    }

    private compareState(user:number,pc:number){
        if((user==Role.PAPER&&pc==Role.ROCK)||(user==Role.SCISSORS&&pc==Role.PAPER)||(user==Role.ROCK&&pc==Role.SCISSORS)){
            this.game_state=GameState.WIN;
        }else if(user==pc){
            this.game_state=GameState.DRAW;
        }else{
            this.game_state=GameState.LOSE;
        }

        this.setResult(this.game_state);
    }

    private setResult(state:number){
        if(state==this.require_state){
            console.log('WIN');
            this.goalHandle();
            this.showResult(1);
        }else{
            console.log('LOSE');
            this.showResult(0);
        }

        this.changeRole();
    }

    private showResult(state:number){
        var rText:ResultText = new ResultText;
        rText.alpha=0;
        rText.pos(210,680);
        rText.setText(state);
        this.addChild(rText);

        Laya.Tween.to(rText,{y:650,alpha:1},800,Laya.Ease.sineIn,Laya.Handler.create(this,function(){this.removeChild(rText);rText.destroy();}));
    }

    private goalHandle(){
        this.sp.play();
        Laya.timer.frameOnce(40, this,function(){this.sp.stop()});

        this.scoreText.setNum();
    }

    private runClock(){
        if(this.clockView.setNum()==false){
            console.log('done');
            Laya.timer.clear(this,this.runClock);
            this.timeOver();
            return;
        }
    }

    private timeOver(){
        this.butBox.offAll(Laya.Event.CLICK);
        Laya.timer.once(800, this,this.endTween);
    }

    private endTween(){
        this.addChildAt(this.blackView,5);
        this.addChildAt(this.clockView,6);
        this.addChildAt(this.endTweenTxt,6); 
        
        Laya.Tween.to(this.blackView,{alpha:0.7},600,Laya.Ease.sineIn);
        Laya.Tween.to(this.clockView,{x:60,y:450,scaleX:1.3,scaleY:1.3},800,Laya.Ease.backInOut,new Laya.Handler(this,this.endTween2));
    }
    private endTween2(){
        Laya.Tween.to(this.endTweenTxt,{y:530,alpha:1},500,Laya.Ease.sineIn,new Laya.Handler(this,this.showEndView));
    }

    private showEndView(){
        this.endView.setNum(this.scoreText.getScore());
        this.addChild(this.endView);

        Laya.timer.once(800, this,function(){
        Laya.Tween.to(this.endView,{alpha:1},600,Laya.Ease.sineIn,this.endView.butIn());
        });
    }

    private restart(){
        this.reset();

        this.removeChild(this.endView);
        this.endView.alpha=0;
        this.removeChild(this.blackView);
        this.blackView.alpha=0;
        this.removeChild(this.endTweenTxt);
        this.endTweenTxt.alpha=0;
        this.endTweenTxt.pos(250,500);

        this.start();
        console.log("restart");
    }

    private reset(){
        this.scoreText.reset();

        this.clockView.reset();
        this.clockView.scale(1,1);
        this.clockView.pos(0,10);
    }
    
    public start(){
        Laya.timer.loop(1000,this,this.runClock);
        this.butBox.on(Laya.Event.CLICK,this,this.clickHanlde);
    }

}