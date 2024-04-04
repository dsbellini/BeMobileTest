"use strict";
const sequelize_1 = require("sequelize");
module.exports = {
    up: async (queryInterface) => {
        await queryInterface.createTable('Enderecos', {
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
                allowNull: true,
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
        await queryInterface.dropTable('Enderecos');
    },
};
