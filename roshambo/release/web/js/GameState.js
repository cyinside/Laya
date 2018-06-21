var GameState = /** @class */ (function () {
    function GameState() {
    }
    GameState.GetInstance = function () {
        if (GameState._instance == null) {
            GameState._instance = new GameState();
        }
        return GameState._instance;
    };
    GameState.LOSE = 0;
    GameState.WIN = 1;
    GameState.DRAW = 2;
    GameState._instance = null;
    return GameState;
}());
//# sourceMappingURL=GameState.js.map