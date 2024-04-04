import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ISell } from '../Interfaces/interfaces';
import SellModel from '../model/SellModel';

export default class SellService {
  private sellModel = new SellModel();

  public async createSell(
    produtoId: number, 
    clienteId: number, 
    quantidade: number, 
    precoUnitario: number, 
    precoTotal: number): Promise<ServiceResponse<ISell>> {

    if (!produtoId || !clienteId || !quantidade || !precoUnitario || !precoTotal) {
      return { status: 'INVALID_DATA',
        data: { message: 'Todos os campos devem ser preenchidos!' } };
    }

    const sellData: ISell = {
      produtoId,
      clienteId,
      quantidade,
      precoUnitario,
      precoTotal,
      dataHora: new Date(),
    };
    await this.sellModel.newSell(sellData);
    return { status: 'SUCCESS', data: {message: "Venda cadastrada com sucesso!"} };
  }
}
