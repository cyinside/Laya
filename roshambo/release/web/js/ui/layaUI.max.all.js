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
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var EndViewUI = /** @class */ (function (_super) {
        __extends(EndViewUI, _super);
        function EndViewUI() {
            return _super.call(this) || this;
        }
        EndViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.EndViewUI.uiView);
        };
        EndViewUI.uiView = { "type": "View", "props": { "width": 640, "height": 1130 }, "child": [{ "type": "Image", "props": { "y": -4, "x": -1, "width": 642, "var": "bg3", "skin": "gameSence/page3.jpg", "height": 1133 } }, { "type": "Label", "props": { "y": 476, "x": 235, "width": 170, "var": "numText", "text": "00", "height": 102, "fontSize": 100, "font": "SimHei", "color": "#ffffff", "bold": true, "align": "center" } }, { "type": "Image", "props": { "y": 835, "x": 210, "var": "replayBut", "skin": "gameSence/replayBtn.png", "mouseEnabled": true } }] };
        return EndViewUI;
    }(View));
    ui.EndViewUI = EndViewUI;
})(ui || (ui = {}));
(function (ui) {
    var Scene1UI = /** @class */ (function (_super) {
        __extends(Scene1UI, _super);
        function Scene1UI() {
            return _super.call(this) || this;
        }
        Scene1UI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.Scene1UI.uiView);
        };
        Scene1UI.uiView = { "type": "View", "props": { "width": 640, "height": 1130 }, "child": [{ "type": "Image", "props": { "y": 303, "x": 316, "width": 248, "var": "pcRole0", "skin": "gameSence/paper.png", "pivotY": 134, "pivotX": 125, "height": 256 } }, { "type": "Image", "props": { "y": 519, "x": 65, "var": "cueImg0", "skin": "gameSence/lose.png" } }, { "type": "Image", "props": { "y": 311, "x": 311, "width": 257, "var": "pcRole2", "skin": "gameSence/rock.png", "pivotY": 136, "pivotX": 124, "height": 241 } }, { "type": "Image", "props": { "y": 295, "x": 317, "width": 246, "var": "pcRole1", "skin": "gameSence/scissors.png", "pivotY": 147, "pivotX": 127, "height": 273 } }, { "type": "Image", "props": { "y": 521, "x": 66, "var": "cueImg1", "skin": "gameSence/win.png" } }, { "type": "Image", "props": { "y": 520, "x": 67, "var": "cueImg2", "skin": "gameSence/draw.png" } }] };
        return Scene1UI;
    }(View));
    ui.Scene1UI = Scene1UI;
})(ui || (ui = {}));
(function (ui) {
    var StartSceneUI = /** @class */ (function (_super) {
        __extends(StartSceneUI, _super);
        function StartSceneUI() {
            return _super.call(this) || this;
        }
        StartSceneUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.StartSceneUI.uiView);
        };
        StartSceneUI.uiView = { "type": "View", "props": { "width": 640, "height": 1130 }, "child": [{ "type": "Image", "props": { "y": -3, "x": -2, "width": 646, "var": "bg0", "skin": "gameSence/page1.jpg", "height": 1138 } }, { "type": "Image", "props": { "y": 825, "x": 194, "var": "startBut", "skin": "gameSence/startBtn.png", "mouseEnabled": true } }, { "type": "Image", "props": { "y": 257, "x": 38, "skin": "gameSence/title.png" } }] };
        return StartSceneUI;
    }(View));
    ui.StartSceneUI = StartSceneUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map