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
var EndView = /** @class */ (function (_super) {
    __extends(EndView, _super);
    function EndView() {
        var _this = _super.call(this) || this;
        _this.replayBut.y = _this.height + _this.replayBut.height;
        _this.replayBut.rotation = 720;
        return _this;
    }
    EndView.prototype.setNum = function (num) {
        this.numText.text = num.toString();
    };
    EndView.prototype.butIn = function () {
        Laya.Tween.to(this.replayBut, { y: 835, rotation: 0 }, 1000, Laya.Ease.backInOut);
    };
    EndView.prototype.butOut = function (callback, caller) {
        Laya.Tween.to(this.replayBut, { y: this.height + this.replayBut.height, rotation: 720 }, 1000, Laya.Ease.backInOut, new Laya.Handler(caller, callback));
    };
    return EndView;
}(ui.EndViewUI));
//# sourceMappingURL=EndView.js.map