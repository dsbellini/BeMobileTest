"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.createTable('Usuarios', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            email: {
                type: sequelize_1.DataTypes.STRING,
            },
            senha: {
                type: sequelize_1.DataTypes.STRING,
            },
            nome: {
                type: sequelize_1.DataTypes.STRING,
            },
            cpf: {
                type: sequelize_1.DataTypes.INTEGER,
            },
            createdAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE,
                defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Usuarios');
    },
};
