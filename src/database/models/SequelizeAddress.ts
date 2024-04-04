import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import { IAddress } from '../../Interfaces/interfaces';
import CustomerModel from './SequelizeCustomer';

export interface AddressInstance extends Model<IAddress>, IAddress {}

type AddressSequelizeModelCreator = ModelDefined<AddressInstance, IAddress>;

const AddressModel: AddressSequelizeModelCreator = db.define(
  'Enderecos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CustomerModel,
        key: 'id',
      },
    },
    rua: {
      type: DataTypes.STRING,
    },
    numero: {
      type: DataTypes.INTEGER,
    },
    bairro: {
      type: DataTypes.STRING,
    },
    cidade: {
      type: DataTypes.STRING,
    },
    estado: {
      type: DataTypes.STRING,
    },
    cep: {
      type: DataTypes.INTEGER,
    },
    complemento: {
      type: DataTypes.STRING,
      allowNull: true, // Definindo allowNull como true para permitir valores nulos caso não haja complemento.
    },
  },
  {
    tableName: 'Enderecos',
    timestamps: false,
  }
);

export default AddressModel;
