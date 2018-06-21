var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Particle2D = Laya.Particle2D;
var ParticleSetting = Laya.ParticleSetting;
var Scene1 = /** @class */ (function (_super) {
    __extends(Scene1, _super);
    function Scene1() {
        var _this = _super.call(this) || this;
        _this.user_state = 0;
        _this.pc_staet = 0;
        _this.require_state = 0;
        _this.game_state = 0;
        _this.cheakRepeat1 = -1;
        _this.cheakRepeat2 = -1;
        Laya.loader.load('star.part', new Laya.Handler(_this, _this.createScene), null, Loader.JSON);
        return _this;
    }
    Scene1.prototype.createScene = function (settings) {
        this.bg = new Laya.Image;
        this.bg.loadImage('res/page2.jpg');
        this.addChild(this.bg);
        this.butBox = new Laya.Sprite();
        this.butBox.pos(30, 800);
        this.addChild(this.butBox);
        this.butView0 = new Butview();
        this.butView0.setRole();
        this.butView0.mouseEnabled = true;
        this.butBox.addChild(this.butView0);
        this.butView1 = new Butview();
        this.butView1.setRole(1);
        this.butView1.pos(200, 0);
        this.butView1.mouseEnabled = true;
        this.butBox.addChild(this.butView1);
        this.butView2 = new Butview();
        this.butView2.setRole(2);
        this.butView2.pos(400, 0);
        this.butView2.mouseEnabled = true;
        this.butBox.addChild(this.butView2);
        this.clockView = new ClockView;
        this.clockView.pos(0, 10);
        this.scoreText = new ScoreText;
        this.scoreText.scale(1.5, 1.5);
        this.scoreText.pos(340, 20);
        this.addChild(this.scoreText);
        this.removeAllpcRole();
        this.changeRole();
        this.sp = new Particle2D(settings);
        this.sp.stop();
        this.sp.pos(Laya.stage.width / 2, 700);
        this.addChild(this.sp);
        this.blackView = new Laya.Sprite;
        this.blackView.graphics.drawRect(0, 0, 640, 1130, "#000000");
        this.blackView.alpha = 0;
        this.addChildAt(this.blackView, 5);
        this.addChildAt(this.clockView, 6);
        this.endTweenTxt = new Laya.Text;
        this.endTweenTxt.text = "时 间 到";
        this.endTweenTxt.color = '#ffffff';
        this.endTweenTxt.fontSize = 60;
        this.endTweenTxt.pos(250, 500);
        // this.endTweenTxt.scale(0,0);
        this.endTweenTxt.alpha = 0;
        this.addChildAt(this.endTweenTxt, 6);
        this.endView = new EndView;
        this.endView.alpha = 0;
        this.endView.replayBut.on(Laya.Event.CLICK, this, this.clickHanlde);
        console.log("numChildren" + this.numChildren);
    };
    Scene1.prototype.clickHanlde = function (e) {
        switch (e.target) {
            case this.endView.replayBut:
                this.endView.butOut(this.restart, this);
                return;
            case this.butView0:
                this.user_state = Role.PAPER;
                break;
            case this.butView1:
                this.user_state = Role.SCISSORS;
                break;
            case this.butView2:
                this.user_state = Role.ROCK;
                break;
        }
        this.compareState(this.user_state, this.pc_staet);
    };
    Scene1.prototype.changeRole = function () {
        this.removeAllpcRole();
        this.pc_staet = this.getRandom1();
        this.require_state = this.getRandom2();
        switch (this.pc_staet) {
            case Role.PAPER:
                this.addChildAt(this.pcRole0, 3);
                break;
            case Role.SCISSORS:
                this.addChildAt(this.pcRole1, 3);
                break;
            case Role.ROCK:
                this.addChildAt(this.pcRole2, 3);
                break;
        }
        switch (this.require_state) {
            case GameState.LOSE:
                this.addChildAt(this.cueImg0, 3);
                break;
            case GameState.WIN:
                this.addChildAt(this.cueImg1, 3);
                break;
            case GameState.DRAW:
                this.addChildAt(this.cueImg2, 3);
                break;
        }
        console.log("require_state" + this.require_state);
    };
    Scene1.prototype.getRandom1 = function () {
        var pcState = ~~(Math.random() * 3);
        if (pcState == this.cheakRepeat1) {
            pcState = ~~(Math.random() * 3);
        }
        else {
            this.cheakRepeat1 = pcState;
        }
        return pcState;
    };
    Scene1.prototype.getRandom2 = function () {
        var requireState = ~~(Math.random() * 3);
        if (requireState == this.cheakRepeat2) {
            requireState = ~~(Math.random() * 3);
        }
        else {
            this.cheakRepeat2 = requireState;
        }
        return requireState;
    };
    Scene1.prototype.removeAllpcRole = function () {
        if (this.contains(this.pcRole0))
            this.removeChild(this.pcRole0);
        if (this.contains(this.pcRole1))
            this.removeChild(this.pcRole1);
        if (this.contains(this.pcRole2))
            this.removeChild(this.pcRole2);
        if (this.contains(this.cueImg0))
            this.removeChild(this.cueImg0);
        if (this.contains(this.cueImg1))
            this.removeChild(this.cueImg1);
        if (this.contains(this.cueImg2))
            this.removeChild(this.cueImg2);
    };
    Scene1.prototype.compareState = function (user, pc) {
        if ((user == Role.PAPER && pc == Role.ROCK) || (user == Role.SCISSORS && pc == Role.PAPER) || (user == Role.ROCK && pc == Role.SCISSORS)) {
            this.game_state = GameState.WIN;
        }
        else if (user == pc) {
            this.game_state = GameState.DRAW;
        }
        else {
            this.game_state = GameState.LOSE;
        }
        this.setResult(this.game_state);
    };
    Scene1.prototype.setResult = function (state) {
        if (state == this.require_state) {
            console.log('WIN');
            this.goalHandle();
            this.showResult(1);
        }
        else {
            console.log('LOSE');
            this.showResult(0);
        }
        this.changeRole();
    };
    Scene1.prototype.showResult = function (state) {
        var rText = new ResultText;
        rText.alpha = 0;
        rText.pos(210, 680);
        rText.setText(state);
        this.addChild(rText);
        Laya.Tween.to(rText, { y: 650, alpha: 1 }, 800, Laya.Ease.sineIn, Laya.Handler.create(this, function () { this.removeChild(rText); rText.destroy(); }));
    };
    Scene1.prototype.goalHandle = function () {
        this.sp.play();
        Laya.timer.frameOnce(40, this, function () { this.sp.stop(); });
        this.scoreText.setNum();
    };
    Scene1.prototype.runClock = function () {
        if (this.clockView.setNum() == false) {
            console.log('done');
            Laya.timer.clear(this, this.runClock);
            this.timeOver();
            return;
        }
    };
    Scene1.prototype.timeOver = function () {
        this.butBox.offAll(Laya.Event.CLICK);
        Laya.timer.once(800, this, this.endTween);
    };
    Scene1.prototype.endTween = function () {
        this.addChildAt(this.blackView, 5);
        this.addChildAt(this.clockView, 6);
        this.addChildAt(this.endTweenTxt, 6);
        Laya.Tween.to(this.blackView, { alpha: 0.7 }, 600, Laya.Ease.sineIn);
        Laya.Tween.to(this.clockView, { x: 60, y: 450, scaleX: 1.3, scaleY: 1.3 }, 800, Laya.Ease.backInOut, new Laya.Handler(this, this.endTween2));
    };
    Scene1.prototype.endTween2 = function () {
        Laya.Tween.to(this.endTweenTxt, { y: 530, alpha: 1 }, 500, Laya.Ease.sineIn, new Laya.Handler(this, this.showEndView));
    };
    Scene1.prototype.showEndView = function () {
        this.endView.setNum(this.scoreText.getScore());
        this.addChild(this.endView);
        Laya.timer.once(800, this, function () {
            Laya.Tween.to(this.endView, { alpha: 1 }, 600, Laya.Ease.sineIn, this.endView.butIn());
        });
    };
    Scene1.prototype.restart = function () {
        this.reset();
        this.removeChild(this.endView);
        this.endView.alpha = 0;
        this.removeChild(this.blackView);
        this.blackView.alpha = 0;
        this.removeChild(this.endTweenTxt);
        this.endTweenTxt.alpha = 0;
        this.endTweenTxt.pos(250, 500);
        this.start();
        console.log("restart");
    };
    Scene1.prototype.reset = function () {
        this.scoreText.reset();
        this.clockView.reset();
        this.clockView.scale(1, 1);
        this.clockView.pos(0, 10);
    };
    Scene1.prototype.start = function () {
        Laya.timer.loop(1000, this, this.runClock);
        this.butBox.on(Laya.Event.CLICK, this, this.clickHanlde);
    };
    return Scene1;
}(ui.Scene1UI));
//# sourceMappingURL=Scene1.js.map