"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var interfaces_1 = require("common/interfaces");
var sequelize_1 = require("sequelize");
var config_1 = require("./config");
var utils_1 = require("./utils");
var getTeamModel = function (sequelize) {
    var Team = sequelize.define(config_1.eModelNames.team, {
        id: (0, utils_1.sequelizeIntegerRequired)(true, true),
        name: (0, utils_1.sequelizeStringRequired)(),
        region: sequelize_1.DataTypes.ENUM.apply(sequelize_1.DataTypes, Object.values(interfaces_1.eTeamRegion)),
    });
    return Team;
};
exports.default = getTeamModel;
