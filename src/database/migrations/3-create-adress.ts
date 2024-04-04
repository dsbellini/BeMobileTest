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
      clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Clientes',
          key: 'id',
        },
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
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Enderecos');
  },
};
