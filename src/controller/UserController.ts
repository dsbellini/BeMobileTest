import { Request, Response } from 'express';
import mapStatus from '../utils/mapStatus';
import UserService from '../service/UserService';

export default class LoginController {
  constructor(
    private userService = new UserService(),
  ) { }

  public async createUser(req: Request, res: Response) {
    const { email, senha } = req.body;
    const serviceResponse = await this.userService.createUser({ email, senha});
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async login(req: Request, res: Response) {
    const { email, senha } = req.body;
    const serviceResponse = await this.userService.login({ email, senha });
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }
}