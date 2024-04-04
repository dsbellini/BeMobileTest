import { Model, QueryInterface, DataTypes, Sequelize } from 'sequelize';
import { IPhoneNumber } from '../interfaces';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IPhoneNumber>>('Telefones', {
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
      numero: {
        type: DataTypes.INTEGER,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Telefones');
  },
};
