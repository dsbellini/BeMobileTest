import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import { ISell } from '../../Interfaces/interfaces';
import CustomerModel from '../models/SequelizeCustomer'; 
import ProductModel from '../models/SequelizeProduct';

export interface SellInstance extends Model<ISell>, ISell {}

type SellSequelizeModelCreator = ModelDefined<SellInstance, ISell>;

const SellModel: SellSequelizeModelCreator = db.define(
  'Vendas',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  },
  {
    tableName: 'Vendas',
    timestamps: false,
  }
);

// // Definindo a relação entre SellModel e CustomerModel
// SellModel.belongsTo(CustomerModel, { foreignKey: 'clienteId', onDelete: "CASCADE" });

// // Definindo a relação entre SellModel e ProductModel
// SellModel.belongsTo(ProductModel, { foreignKey: 'produtoId', onDelete: "CASCADE"});

export default SellModel;
