import WebGL = Laya.WebGL;
import Loader = Laya.Loader;
import Handler = Laya.Handler;
import Sprite = Laya.Sprite;
import Scene1UI = ui.Scene1UI;

// 程序入口
class GameMain{
    private gameRes_TEXTURE_PATH:string="res/atlas/gameSence.atlas";
    private bgRes:string="res/page2.jpg";
    private res_root:Array<any> =
	[
		{url:this.gameRes_TEXTURE_PATH, type:Laya.Loader.ATLAS },
        {url:this.bgRes,type:Laya.Loader.IMAGE}
	];
    constructor(){
        Laya.init(640,1130, WebGL);
        Laya.stage.scaleMode = "showall";
        Laya.stage.bgColor = "#248cef";

        //调用DebugTool调试面板
        // Laya.DebugTool.init();

        //调用DebugPanel调试面板
        // Laya.DebugPanel.init();

        Laya.loader.load(this.res_root,Handler.create(this,this.onCreateScene));

    }
    private scene1:Scene1;
    private startScene:StartScene;
    private onCreateScene(){
        this.scene1 = new Scene1();
        console.log("res loaded");

        this.startScene = new StartScene();
        Laya.stage.addChild(this.startScene);
        
        this.startScene.on("changeScene",this,this.changeHandle);
    }

    private changeHandle(){
        Laya.Tween.to(this.startScene,{alpha:0},500,Laya.Ease.sineIn,new Laya.Handler(this,function(){
            Laya.stage.addChild(this.scene1);
            Laya.stage.removeChild(this.startScene);
            this.scene1.start()
        }))
    }
}
new GameMain();