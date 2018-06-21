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
        Laya.loader.load(this.res_root, Handler.create(this, this.onCreateScene));
    }
    GameMain.prototype.onCreateScene = function () {
        this.scene1UI = new Scene1UI;
        Laya.stage.addChild(this.scene1UI);
        console.log("res loaded");
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=Main.js.map