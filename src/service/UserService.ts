import * as bcrypt from 'bcryptjs';
import UserModel from '../model/UserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IUsuario } from '../database/interfaces';
import jwtUtil from '../utils/jwt.util';

export type Token = {
  token: string,
};

export default class LoginService {
  constructor(
    private userModel: UserModel = new UserModel(),
  ) { }

  public async createUser(user: IUsuario): Promise<ServiceResponse<IUsuario>> {

    if (!user.email || !user.senha) {
      return { status: 'INVALID_DATA',
        data: { message: 'Todos os campos devem ser preenchidos!' } };
    }

    const hashedPassword = await bcrypt.hash(user.senha, 5);

    const userToCreate = { ...user, senha: hashedPassword };

    const findUser = await this.userModel.findUser(user);

    if (findUser) {
      return { status: 'INVALID_DATA', data: { message: 'Usuário já cadastrado!' } };
    }

    await this.userModel.newUser(userToCreate);
    return { status: 'SUCCESS', data: {message: 'Usuário cadastrado com sucesso!'}};
  }

  public async login(login: IUsuario): Promise<ServiceResponse<Token>> {
  
    if (!login.email || !login.senha) {
      return { status: 'INVALID_DATA',
        data: { message: 'Todos os campos devem ser preenchidos!' } };
    }
  
    const findUser = await this.userModel.findUser(login);

    if (!findUser) {
      return { status: 'UNAUTHORIZED', data: { message: 'Usuário não encontrado' } };
    }
  
    const { senha } = findUser;
  
    if (!bcrypt.compareSync(login.senha, senha)) {
      return { status: 'UNAUTHORIZED', data: { message: 'Dados incorretos. Tente novamente' } };
    }
  
    const { email } = findUser;
    const token = jwtUtil.sign({ email });
    return { status: 'SUCCESS', data: { token } };
  }
}
