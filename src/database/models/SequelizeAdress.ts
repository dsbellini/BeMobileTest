import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import { IAdress } from '../interfaces';

export interface AddressInstance extends Model<IAdress>, IAdress {}

type AddressSequelizeModelCreator = ModelDefined<AddressInstance, IAdress>;

const AddressModel: AddressSequelizeModelCreator = db.define(
  'Endereco',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    tableName: 'Endereco',
    timestamps: false,
  }
);

export default AddressModel;
