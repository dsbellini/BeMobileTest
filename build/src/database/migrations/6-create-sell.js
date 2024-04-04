"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.createTable('Vendas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            clienteId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Clientes',
                    key: 'id',
                },
            },
            produtoId: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Produtos',
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
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Vendas');
    },
};
