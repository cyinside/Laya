class Role{
    public static PAPER:number=0;
    public static SCISSORS:number=1;
    public static ROCK:number=2;

    public static GetInstance() : Role{
        if (Role._instance == null){
            Role._instance = new Role();
        }
        return Role._instance;
    }

    private static _instance = null;
}