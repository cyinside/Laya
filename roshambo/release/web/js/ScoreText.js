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
var ScoreText = /** @class */ (function (_super) {
    __extends(ScoreText, _super);
    function ScoreText() {
        var _this = _super.call(this) || this;
        _this.scoreNum = 0;
        _this.loadFont();
        return _this;
    }
    ScoreText.prototype.loadFont = function () {
        this.clockBitmapFont = new Laya.BitmapFont;
        this.clockBitmapFont.loadFont("res/atlas/font/num.fnt", Laya.Handler.create(this, this.createText));
    };
    ScoreText.prototype.createText = function () {
        this.clockBitmapFont.setSpaceWidth(10);
        Laya.Text.registerBitmapFont('numberText', this.clockBitmapFont);
        this.txt = new Laya.Text();
        this.txt.text = "0";
        this.txt.width = 250;
        this.txt.wordWrap = true;
        this.txt.align = "center";
        this.txt.font = 'numberText';
        this.txt.fontSize = 70;
        this.txt.pos(0, 0);
        this.addChild(this.txt);
    };
    ScoreText.prototype.setNum = function () {
        this.scoreNum++;
        this.txt.text = this.scoreNum.toString();
    };
    ScoreText.prototype.getScore = function () {
        return this.scoreNum;
    };
    ScoreText.prototype.reset = function () {
        this.scoreNum = 0;
        this.txt.text = this.scoreNum.toString();
    };
    return ScoreText;
}(Laya.Sprite));
//# sourceMappingURL=ScoreText.js.map