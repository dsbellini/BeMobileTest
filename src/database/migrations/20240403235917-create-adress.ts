import { QueryInterface, DataTypes, Sequelize, Model } from 'sequelize';
import { IAdress } from '../interfaces';

export = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IAdress>>('Enderecos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      rua: {
        type: DataTypes.STRING,
      },
      numero: {
        type: DataTypes.INTEGER,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      cidade: {
        type: DataTypes.STRING,
      },
      estado: {
        type: DataTypes.STRING,
      },
      cep: {
        type: DataTypes.INTEGER,
      },
      complemento: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Enderecos');
  },
};
