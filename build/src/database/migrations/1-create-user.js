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
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Usuarios');
    },
};
