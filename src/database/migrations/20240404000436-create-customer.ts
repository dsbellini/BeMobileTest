import { Model, QueryInterface, DataTypes, Sequelize } from 'sequelize';
import { ICustomer } from '../interfaces';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<ICustomer>>('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        type: DataTypes.STRING,
      },
      cpf: {
        type: DataTypes.INTEGER,
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
    await queryInterface.dropTable('Clientes');
  },
};
