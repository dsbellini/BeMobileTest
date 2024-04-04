// @ts-ignore
import config from '../config/database';
import { Dialect, Sequelize } from 'sequelize';

const db = new Sequelize({
  ...config,
  dialect: config.dialect as Dialect,
});

export default db;