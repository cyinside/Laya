
import View=laya.ui.View;
import Dialog=laya.ui.Dialog;
module ui {
    export class EndViewUI extends View {
		public bg3:Laya.Image;
		public numText:Laya.Label;
		public replayBut:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1130},"child":[{"type":"Image","props":{"y":-4,"x":-1,"width":642,"var":"bg3","skin":"gameSence/page3.jpg","height":1133}},{"type":"Label","props":{"y":476,"x":235,"width":170,"var":"numText","text":"00","height":102,"fontSize":100,"font":"SimHei","color":"#ffffff","bold":true,"align":"center"}},{"type":"Image","props":{"y":835,"x":210,"var":"replayBut","skin":"gameSence/replayBtn.png","mouseEnabled":true}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.EndViewUI.uiView);

        }

    }
}

module ui {
    export class Scene1UI extends View {
		public pcRole0:Laya.Image;
		public cueImg0:Laya.Image;
		public pcRole2:Laya.Image;
		public pcRole1:Laya.Image;
		public cueImg1:Laya.Image;
		public cueImg2:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1130},"child":[{"type":"Image","props":{"y":303,"x":316,"width":248,"var":"pcRole0","skin":"gameSence/paper.png","pivotY":134,"pivotX":125,"height":256}},{"type":"Image","props":{"y":519,"x":65,"var":"cueImg0","skin":"gameSence/lose.png"}},{"type":"Image","props":{"y":311,"x":311,"width":257,"var":"pcRole2","skin":"gameSence/rock.png","pivotY":136,"pivotX":124,"height":241}},{"type":"Image","props":{"y":295,"x":317,"width":246,"var":"pcRole1","skin":"gameSence/scissors.png","pivotY":147,"pivotX":127,"height":273}},{"type":"Image","props":{"y":521,"x":66,"var":"cueImg1","skin":"gameSence/win.png"}},{"type":"Image","props":{"y":520,"x":67,"var":"cueImg2","skin":"gameSence/draw.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.Scene1UI.uiView);

        }

    }
}

module ui {
    export class StartSceneUI extends View {
		public bg0:Laya.Image;
		public startBut:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":640,"height":1130},"child":[{"type":"Image","props":{"y":-3,"x":-2,"width":646,"var":"bg0","skin":"gameSence/page1.jpg","height":1138}},{"type":"Image","props":{"y":825,"x":194,"var":"startBut","skin":"gameSence/startBtn.png","mouseEnabled":true}},{"type":"Image","props":{"y":257,"x":38,"skin":"gameSence/title.png"}}]};
        constructor(){ super()}
        createChildren():void {
        
            super.createChildren();
            this.createView(ui.StartSceneUI.uiView);

        }

    }
}
