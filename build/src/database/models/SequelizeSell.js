"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const index_1 = __importDefault(require("./index"));
const SequelizeCustomer_1 = __importDefault(require("../models/SequelizeCustomer"));
const SequelizeProduct_1 = __importDefault(require("../models/SequelizeProduct"));
const SellModel = index_1.default.define('Vendas', {
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
    produtoId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: SequelizeProduct_1.default,
            key: 'id',
        },
    },
    quantidade: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    precoUnitario: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    precoTotal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    dataHora: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    tableName: 'Vendas',
    timestamps: false,
});
// Definindo a relação entre SellModel e CustomerModel
SellModel.belongsTo(SequelizeCustomer_1.default, { foreignKey: 'clienteId' });
// Definindo a relação entre SellModel e ProductModel
SellModel.belongsTo(SequelizeProduct_1.default, { foreignKey: 'produtoId' });
exports.default = SellModel;
