"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var utils_1 = require("./utils");
var getPlayerModel = function (sequelize) {
    var Player = sequelize.define(config_1.eModelNames.player, {
        id: (0, utils_1.sequelizeIntegerRequired)(true, true),
        name: (0, utils_1.sequelizeStringRequired)(),
        age: (0, utils_1.sequelizeIntegerRequired)(),
        height: (0, utils_1.sequelizeIntegerRequired)(),
        skill: (0, utils_1.sequelizeIntegerRequired)(),
    });
    return Player;
};
exports.default = getPlayerModel;
