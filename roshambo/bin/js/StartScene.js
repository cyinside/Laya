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
var StartScene = /** @class */ (function (_super) {
    __extends(StartScene, _super);
    function StartScene() {
        var _this = _super.call(this) || this;
        _this.startBut.y = _this.height + _this.startBut.height;
        _this.startBut.rotation = 720;
        _this.startBut.on(Laya.Event.CLICK, _this, _this.butOut);
        _this.butIn();
        return _this;
    }
    StartScene.prototype.changeScene = function () {
        this.event("changeScene");
    };
    StartScene.prototype.butIn = function () {
        Laya.Tween.to(this.startBut, { y: 835, rotation: 0 }, 1000, Laya.Ease.backInOut);
    };
    StartScene.prototype.butOut = function () {
        Laya.Tween.to(this.startBut, { y: this.height + this.startBut.height, rotation: 720 }, 1000, Laya.Ease.backInOut, new Laya.Handler(this, this.changeScene));
    };
    return StartScene;
}(ui.StartSceneUI));
//# sourceMappingURL=StartScene.js.map