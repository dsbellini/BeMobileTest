"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const UsuarioModel = index_1.default.define('Clientes', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: sequelize_1.DataTypes.STRING,
    },
    cpf: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: index_1.default.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: index_1.default.literal('CURRENT_TIMESTAMP'),
    },
}, {
    tableName: 'Clientes',
    timestamps: false,
});
exports.default = UsuarioModel;
