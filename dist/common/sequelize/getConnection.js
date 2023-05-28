"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.getMysqlConnection = void 0;
var sequelize_1 = require("sequelize");
var models_1 = require("./models");
var existingConnection;
var database = process.env.DB_NAME || "fantasy-team-ball";
exports.database = database;
var getMysqlDbConfig = function (withDatabase) {
    if (withDatabase === void 0) { withDatabase = true; }
    return __assign(__assign({ username: process.env.DB_USERNAME || "root", password: process.env.DB_PASSWORD || "opensesame", host: process.env.DB_HOST || "localhost", port: +(process.env.DB_PORT || 3306) }, (withDatabase ? { database: database } : {})), { dialect: "mysql", logging: false, define: { freezeTableName: true, underscored: true }, pool: { max: 5, min: 0, acquire: 30000, idle: 10000 } });
};
var getMysqlConnection = function (newConnection, withDatabase) {
    if (newConnection === void 0) { newConnection = false; }
    if (withDatabase === void 0) { withDatabase = true; }
    var newConnectionObject = new sequelize_1.Sequelize(getMysqlDbConfig(withDatabase));
    var dbConnection = newConnection
        ? newConnectionObject
        : existingConnection || newConnectionObject;
    existingConnection = dbConnection;
    var models = (0, models_1.getModelsWithAssociations)(dbConnection);
    return { dbConnection: dbConnection, models: models };
};
exports.getMysqlConnection = getMysqlConnection;
