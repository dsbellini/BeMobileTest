"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const AddressModel = index_1.default.define('Endereco', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    rua: {
        type: sequelize_1.DataTypes.STRING,
    },
    numero: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    bairro: {
        type: sequelize_1.DataTypes.STRING,
    },
    cidade: {
        type: sequelize_1.DataTypes.STRING,
    },
    estado: {
        type: sequelize_1.DataTypes.STRING,
    },
    cep: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    complemento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true, // Definindo allowNull como true para permitir valores nulos caso não haja complemento.
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
    tableName: 'Endereco',
    timestamps: false,
});
exports.default = AddressModel;
