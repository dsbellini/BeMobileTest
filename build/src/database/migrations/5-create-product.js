"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.createTable('Produtos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER,
            },
            nome: {
                type: sequelize_1.DataTypes.STRING,
            },
            descricao: {
                type: sequelize_1.DataTypes.STRING,
            },
            preco: {
                type: sequelize_1.DataTypes.FLOAT,
            },
            excluido: {
                type: sequelize_1.DataTypes.BOOLEAN,
                defaultValue: false,
            },
        });
    },
    down: async (queryInterface) => {
        await queryInterface.dropTable('Produtos');
    },
};
