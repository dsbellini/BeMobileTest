import { Request, Response } from 'express';
import mapStatus from '../utils/mapStatus';
import PhoneService from '../service/PhoneService';

export default class PhoneController {
  constructor(
    private phoneService = new PhoneService(),
  ) { }

  public async createPhone(req: Request, res: Response) {
    const { clienteId, numero } = req.body;
    const serviceResponse = await this.phoneService.createPhone({ clienteId, numero });
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async findAllPhones(req: Request, res: Response) {
    const serviceResponse = await this.phoneService.findAllPhones();
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async findPhoneById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.phoneService.findPhoneById(Number(id));
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async updatePhone(req: Request, res: Response) {
    const { id } = req.params;
    const { clienteId, numero } = req.body;
    const serviceResponse = await this.phoneService.updatePhone(Number(id), { clienteId, numero });
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async deletePhone(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.phoneService.deletePhone(Number(id));
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }
}
