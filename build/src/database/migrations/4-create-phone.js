"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.createTable('Telefones', {
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
            numero: {
                type: sequelize_1.DataTypes.INTEGER,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Telefones');
    },
};
