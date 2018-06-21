var Role = /** @class */ (function () {
    function Role() {
    }
    Role.GetInstance = function () {
        if (Role._instance == null) {
            Role._instance = new Role();
        }
        return Role._instance;
    };
    Role.PAPER = 0;
    Role.SCISSORS = 1;
    Role.ROCK = 2;
    Role._instance = null;
    return Role;
}());
//# sourceMappingURL=Role.js.map