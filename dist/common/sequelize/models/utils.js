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
exports.sequelizeStringRequired = exports.sequelizeStringOptional = exports.sequelizeIntegerRequired = exports.sequelizeIntegerOptional = void 0;
var sequelize_1 = require("sequelize");
var sequelizeIntegerOptional = function (primaryKey, autoIncrement) {
    if (primaryKey === void 0) { primaryKey = false; }
    if (autoIncrement === void 0) { autoIncrement = false; }
    return ({
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: autoIncrement,
        primaryKey: primaryKey,
    });
};
exports.sequelizeIntegerOptional = sequelizeIntegerOptional;
var sequelizeIntegerRequired = function (primaryKey, autoIncrement) {
    if (primaryKey === void 0) { primaryKey = false; }
    if (autoIncrement === void 0) { autoIncrement = false; }
    return (__assign(__assign({}, sequelizeIntegerOptional(primaryKey, autoIncrement)), { allowNull: false }));
};
exports.sequelizeIntegerRequired = sequelizeIntegerRequired;
var sequelizeStringOptional = function () { return ({
    type: sequelize_1.DataTypes.STRING,
}); };
exports.sequelizeStringOptional = sequelizeStringOptional;
var sequelizeStringRequired = function () { return ({
    type: sequelize_1.DataTypes.STRING,
    allowNull: false,
}); };
exports.sequelizeStringRequired = sequelizeStringRequired;
