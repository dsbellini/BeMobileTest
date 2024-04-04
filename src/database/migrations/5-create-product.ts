import { Model, QueryInterface, DataTypes, Sequelize } from 'sequelize';
import { IProduct } from '../../Interfaces/interfaces';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<IProduct>>('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        type: DataTypes.STRING,
      },
      descricao: {
        type: DataTypes.STRING,
      },
      preco: {
        type: DataTypes.FLOAT,
      },
      excluido: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Produtos');
  },
};
