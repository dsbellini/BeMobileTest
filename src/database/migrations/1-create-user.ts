import { Model, QueryInterface, DataTypes, Sequelize } from 'sequelize';
import { IUsuario } from '../interfaces';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IUsuario>>('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      email: {
        type: DataTypes.STRING,
      },
      senha: {
        type: DataTypes.STRING,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Usuarios');
  },
};
