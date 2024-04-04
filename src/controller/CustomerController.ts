import { Request, Response } from 'express';
import mapStatus from '../utils/mapStatus';
import UserService from '../service/UserService';
import CustomerService from '../service/CustomerService';

export default class LoginController {
  constructor(
    private customerService = new CustomerService(),
  ) { }

  public async createCustomer(req: Request, res: Response) {
    const { nome, cpf } = req.body;
    const serviceResponse = await this.customerService.createCustomer({ nome, cpf});
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async findAllCustomers(req: Request, res: Response) {
    const serviceResponse = await this.customerService.findAllCustomers();
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async findCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.customerService.findCustomerById(Number(id));
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    const { nome, cpf } = req.body;
    const serviceResponse = await this.customerService.updateCustomer(Number(id), { nome, cpf });
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.customerService.deleteCustomer(Number(id));
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }
}