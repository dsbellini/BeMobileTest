import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import { IProduct } from '../interfaces';

export interface ProductInstance extends Model<IProduct>, IProduct {}

type ProductSequelizeModelCreator = ModelDefined<ProductInstance, IProduct>;

const ProductModel: ProductSequelizeModelCreator = db.define(
  'Produtos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preco: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'Produtos',
    timestamps: false,
  }
);

export default ProductModel;
