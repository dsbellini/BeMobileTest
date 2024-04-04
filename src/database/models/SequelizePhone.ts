import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import { IPhoneNumber } from '../../Interfaces/interfaces';
import CustomerModel from '../models/SequelizeCustomer'

export interface PhoneNumberInstance extends Model<IPhoneNumber>, IPhoneNumber {}

type PhoneNumberSequelizeModelCreator = ModelDefined<PhoneNumberInstance, IPhoneNumber>;

const PhoneModel: PhoneNumberSequelizeModelCreator = db.define(
  'Telefones',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'Telefones',
    timestamps: false,
  }
);

// Definindo a relação entre PhoneNumberInstance e CustomerInstance
PhoneModel.belongsTo(CustomerModel, { foreignKey: 'clienteId' });
CustomerModel.hasMany(PhoneModel, { foreignKey: 'clienteId' });

export default PhoneModel;
