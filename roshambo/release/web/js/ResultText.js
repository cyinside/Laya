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
var ResultText = /** @class */ (function (_super) {
    __extends(ResultText, _super);
    function ResultText() {
        var _this = _super.call(this) || this;
        _this.create();
        return _this;
    }
    ResultText.prototype.create = function () {
        this.resulet = new Laya.Text;
        this.resulet.text = "sss";
        this.resulet.color = "#ffffff";
        this.resulet.fontSize = 60;
        this.resulet.bold = true;
        this.addChild(this.resulet);
    };
    ResultText.prototype.setText = function (state) {
        var txt = "";
        switch (state) {
            case 1:
                txt = "Bingo!!";
                this.resulet.color = '#cce198';
                break;
            case 0:
                txt = "Noooo!!";
                this.resulet.color = '#ec6941';
                break;
        }
        this.resulet.text = txt;
    };
    return ResultText;
}(Laya.Sprite));
//# sourceMappingURL=ResultText.js.map