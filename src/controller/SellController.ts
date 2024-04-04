import { Request, Response } from 'express';
import mapStatus from '../utils/mapStatus';
import SellService from '../service/SellService';

export default class SellController {
  constructor(
    private sellService = new SellService(),
  ) { }

  public async createSell(req: Request, res: Response) {
    const { produtoId, clienteId, quantidade, precoUnitario, precoTotal } = req.body;
    const serviceResponse = await this.sellService.createSell(produtoId, clienteId, quantidade, precoUnitario, precoTotal);
    return res.status(mapStatus(serviceResponse.status)).json(serviceResponse.data);
  }
};