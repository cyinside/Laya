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
var Butview = /** @class */ (function (_super) {
    __extends(Butview, _super);
    function Butview() {
        var _this = _super.call(this) || this;
        _this.butRes = [
            { url: 'gameSence/paper.png' },
            { url: 'gameSence/scissors.png' },
            { url: 'gameSence/rock.png' }
        ];
        _this.onCreateScene();
        return _this;
    }
    Butview.prototype.onCreateScene = function () {
        this.but1 = new Laya.Sprite();
        this.but1.loadImage("gameSence/selectBtn.png");
        this.addChild(this.but1);
        this.butRole = new Laya.Sprite();
        this.butRole.x = 25;
        this.butRole.y = 40;
        this.addChild(this.butRole);
    };
    Butview.prototype.setRole = function (num) {
        if (num === void 0) { num = 0; }
        this.butRole.graphics.clear();
        this.butRole.loadImage(this.butRes[num].url);
        console.log(num);
    };
    return Butview;
}(laya.ui.View));
//# sourceMappingURL=ButView.js.map