"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const SequelizeCustomer_1 = __importDefault(require("../models/SequelizeCustomer"));
const PhoneModel = index_1.default.define('Telefones', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    numero: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    clienteId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'Telefones',
    timestamps: false,
});
// Definindo a relação entre PhoneNumberInstance e CustomerInstance
PhoneModel.belongsTo(SequelizeCustomer_1.default, { foreignKey: 'clienteId' });
SequelizeCustomer_1.default.hasMany(PhoneModel, { foreignKey: 'clienteId' });
exports.default = PhoneModel;
