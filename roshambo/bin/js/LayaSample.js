var WebGL = Laya.WebGL;
var Loader = Laya.Loader;
var Handler = Laya.Handler;
var Sprite = Laya.Sprite;
var Scene1UI = ui.Scene1UI;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.gameRes_TEXTURE_PATH = "res/atlas/gameSence.atlas";
        this.bgRes = "res/page2.jpg";
        this.res_root = [
            { url: this.gameRes_TEXTURE_PATH, type: Laya.Loader.ATLAS },
            { url: this.bgRes, type: Laya.Loader.IMAGE }
        ];
        Laya.init(640, 1130, WebGL);
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#248cef";
        //调用DebugTool调试面板
        // Laya.DebugTool.init();
        //调用DebugPanel调试面板
        // Laya.DebugPanel.init();
        Laya.loader.load(this.res_root, Handler.create(this, this.onCreateScene));
    }
    GameMain.prototype.onCreateScene = function () {
        this.scene1 = new Scene1();
        console.log("res loaded");
        this.startScene = new StartScene();
        Laya.stage.addChild(this.startScene);
        this.startScene.on("changeScene", this, this.changeHandle);
    };
    GameMain.prototype.changeHandle = function () {
        Laya.Tween.to(this.startScene, { alpha: 0 }, 500, Laya.Ease.sineIn, new Laya.Handler(this, function () {
            Laya.stage.addChild(this.scene1);
            Laya.stage.removeChild(this.startScene);
            this.scene1.start();
        }));
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map