import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import { ICustomer } from '../interfaces';

export interface CustomerInstance extends Model<ICustomer>, ICustomer {}

type CustomerSequelizeModelCreator = ModelDefined<CustomerInstance, ICustomer>;

const UsuarioModel: CustomerSequelizeModelCreator = db.define(
  'Clientes',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.INTEGER,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: db.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: db.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    tableName: 'Clientes',
    timestamps: false,
  }
);

export default UsuarioModel;
