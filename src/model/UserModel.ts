import { IUsuario } from '../database/interfaces';
import SequelizeUser from '../database/models/SequelizeUser';

export default class UserModel {
  private model = SequelizeUser;

  public async newUser(user: IUsuario): Promise<IUsuario> {
    const newUser = await this.model.create(user);
    return newUser.dataValues;
  }

  public async findUser(user: IUsuario): Promise<IUsuario | null> {
    const userData = await this.model.findOne({ where: { email: user.email } });
    if (!userData) {
      return null;
    }
    return userData.dataValues;
  }
}
