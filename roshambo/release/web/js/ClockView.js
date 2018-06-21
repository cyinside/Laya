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
var ClockView = /** @class */ (function (_super) {
    __extends(ClockView, _super);
    function ClockView() {
        var _this = _super.call(this) || this;
        _this.clockText = "numberText";
        _this.clockNum = 3;
        _this.tweenOn = false;
        _this.loadFont();
        return _this;
    }
    ClockView.prototype.loadFont = function () {
        this.clockBitmapFont = new Laya.BitmapFont;
        this.clockBitmapFont.loadFont("res/atlas/font/num.fnt", Laya.Handler.create(this, this.createText));
    };
    ClockView.prototype.createText = function () {
        this.clockBitmapFont.setSpaceWidth(10);
        Laya.Text.registerBitmapFont(this.clockText, this.clockBitmapFont);
        this.txt = new Laya.Text();
        this.txt.text = this.clockNum.toString();
        this.txt.width = 250;
        this.txt.wordWrap = true;
        this.txt.align = "center";
        this.txt.font = this.clockText;
        this.txt.fontSize = 70;
        this.txt.pos(50, 20);
        this.addChild(this.txt);
        this.clockImg = new Laya.Image();
        this.clockImg.loadImage('gameSence/clock.png');
        this.clockImg.autoSize = true;
        this.clockImg.rotation;
        this.clockImg.pos(this.clockImg.width / 2 - 10, this.clockImg.height / 2 - 10);
        this.clockImg.pivot(this.clockImg.width / 2, this.clockImg.height / 2);
        this.clockImg.scale(0.6, 0.6);
        this.addChild(this.clockImg);
    };
    ClockView.prototype.setNum = function () {
        this.clockNum--;
        this.txt.alpha = 1;
        if (this.clockNum < 10 && this.tweenOn == false) {
            this.tweenOn = true;
            this.clockTween1();
        }
        if (this.clockNum < 0) {
            this.txt.alpha = 0;
            return false;
        }
        this.txt.text = this.clockNum.toString();
    };
    ClockView.prototype.clockTween1 = function () {
        Laya.Tween.clearTween(this.clockImg);
        Laya.Tween.to(this.clockImg, { rotation: -15 }, 400, Laya.Ease.sineInOut, new Laya.Handler(this, this.clockTween2));
    };
    ClockView.prototype.clockTween2 = function () {
        Laya.Tween.clearTween(this.clockImg);
        Laya.Tween.to(this.clockImg, { rotation: 15 }, 400, Laya.Ease.sineInOut, new Laya.Handler(this, this.clockTween1));
    };
    ClockView.prototype.reset = function () {
        Laya.Tween.clearTween(this.clockImg);
        this.clockImg.rotation = 0;
        this.txt.alpha = 1;
        this.clockNum = 30;
        this.txt.text = this.clockNum.toString();
        this.tweenOn = false;
    };
    return ClockView;
}(Laya.Sprite));
//# sourceMappingURL=ClockView.js.map