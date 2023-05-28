"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var utils_1 = require("./utils");
var getPlayerTeamModel = function (sequelize) {
    var PlayerTeam = sequelize.define(config_1.eModelNames.playerTeam, {
        playerId: (0, utils_1.sequelizeIntegerRequired)(true),
        teamId: (0, utils_1.sequelizeIntegerRequired)(true),
        value: (0, utils_1.sequelizeIntegerRequired)(),
    });
    return PlayerTeam;
};
exports.default = getPlayerTeamModel;
