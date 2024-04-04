import { Model, QueryInterface, DataTypes, Sequelize } from 'sequelize';
import { ISell } from '../../Interfaces/interfaces';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable<Model<ISell>>('Vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      clienteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'Clientes',
        //   key: 'id',
        // },
      },
      produtoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // references: {
        //   model: 'Produtos',
        //   key: 'id',
        // },
        
      },
      quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precoUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      precoTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      dataHora: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Vendas');
  },
};
