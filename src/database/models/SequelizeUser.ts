import { DataTypes, Model, ModelDefined } from 'sequelize';
import db from './index';
import { IUsuario } from '../interfaces';

export interface UsuarioInstance extends Model<IUsuario>, IUsuario {}

type UsuarioSequelizeModelCreator = ModelDefined<UsuarioInstance, IUsuario>;

const UsuarioModel: UsuarioSequelizeModelCreator = db.define(
  'Usuarios',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
    },
    senha: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Usuarios',
    timestamps: false,
  }
);

export default UsuarioModel;
