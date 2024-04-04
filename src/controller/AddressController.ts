import { Request, Response } from 'express';
import mapStatus from '../utils/mapStatus';
import AddressService from '../service/AddressService';

export default class AddressController {
  constructor(
    private addressService = new AddressService(),
  ) { }

  public async createAddress(req: Request, res: Response) {
    const { clienteId, rua, numero, bairro, cidade, estado, cep, complemento } = req.body;
    const serviceResponse = await this.addressService.createAddress({
      clienteId, rua, numero, bairro, cidade, estado, cep, complemento,
     });
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async findAllAddresses(req: Request, res: Response) {
    const serviceResponse = await this.addressService.findAllAddresses();
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async findAddressById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.addressService.findAddressById(Number(id));
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async updateAddress(req: Request, res: Response) {
    const { id } = req.params;
    const { clienteId, rua, numero, bairro, cidade, estado, cep, complemento } = req.body;
    const serviceResponse = await this.addressService.updateAddress(Number(id), {
      clienteId, rua, numero, bairro, cidade, estado, cep, complemento,
     });
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }

  public async deleteAddress(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.addressService.deleteAddress(Number(id));
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }
}
