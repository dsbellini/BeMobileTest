"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const database_1 = __importDefault(require("../config/database"));
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize({
    ...database_1.default,
    dialect: database_1.default.dialect,
});
exports.default = db;
