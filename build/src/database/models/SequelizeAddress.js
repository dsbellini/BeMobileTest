"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const SequelizeCustomer_1 = __importDefault(require("./SequelizeCustomer"));
const AddressModel = index_1.default.define('Enderecos', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    clienteId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: SequelizeCustomer_1.default,
            key: 'id',
        },
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
}, {
    tableName: 'Enderecos',
    timestamps: false,
});
exports.default = AddressModel;
