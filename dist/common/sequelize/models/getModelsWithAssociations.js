"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eAssociationKeys = exports.getModelsWithAssociations = void 0;
var config_1 = require("./config");
var player_1 = __importDefault(require("./player"));
var playerTeam_1 = __importDefault(require("./playerTeam"));
var team_1 = __importDefault(require("./team"));
var eAssociationKeys;
(function (eAssociationKeys) {
    eAssociationKeys["teams"] = "teams";
    eAssociationKeys["players"] = "players";
})(eAssociationKeys || (eAssociationKeys = {}));
exports.eAssociationKeys = eAssociationKeys;
var getModelsWithAssociations = function (sequelize) {
    var _a;
    var Player = (0, player_1.default)(sequelize);
    var Team = (0, team_1.default)(sequelize);
    var PlayerTeam = (0, playerTeam_1.default)(sequelize);
    Player.belongsToMany(Team, {
        as: eAssociationKeys.teams,
        through: PlayerTeam,
    });
    Team.belongsToMany(Player, {
        as: eAssociationKeys.players,
        through: PlayerTeam,
    });
    return _a = {},
        _a[config_1.eModelNames.player] = Player,
        _a[config_1.eModelNames.team] = Team,
        _a[config_1.eModelNames.playerTeam] = PlayerTeam,
        _a;
};
exports.getModelsWithAssociations = getModelsWithAssociations;
