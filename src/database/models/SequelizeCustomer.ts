import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import { ICustomer } from '../../Interfaces/interfaces';
import UserModel from '../models/SequelizeUser';

export interface CustomerInstance extends Model<ICustomer>, ICustomer {}

type CustomerSequelizeModelCreator = ModelDefined<CustomerInstance, ICustomer>;

const CustomerModel: CustomerSequelizeModelCreator = db.define(
  'Clientes',
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
    cpf: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Clientes',
    timestamps: false,
  }
);

export default CustomerModel;
