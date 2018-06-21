class GameState{
    public static LOSE:number=0;
    public static WIN:number=1;
    public static DRAW:number=2;

    public static GetInstance() : GameState{
        if (GameState._instance == null){
            GameState._instance = new GameState();
        }
        return GameState._instance;
    }

    private static _instance = null;
}