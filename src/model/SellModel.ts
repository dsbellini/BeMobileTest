import { Op, Sequelize } from 'sequelize';
import { ISell } from '../Interfaces/interfaces';
import SequelizeSell from '../database/models/SequelizeSell';

export default class SellModel {
  private model = SequelizeSell;

  public async newSell(sell: ISell): Promise<ISell> {
    const newSell = await this.model.create(sell);
    return newSell.dataValues;
  }

  public async findSalesByCustomerId(customerId: number, year?: number, month?: number): Promise<ISell[]> {
    let whereClause: any = { clienteId: customerId };
    
    if (year && month) {
      whereClause = {
        ...whereClause,
        dataHora: {
          [Op.and]: [
            Sequelize.literal(`YEAR(dataHora) = ${year}`),
            Sequelize.literal(`MONTH(dataHora) = ${month}`),
          ],
        },
      };
    }

    const sales = await this.model.findAll({ where: whereClause });
    return sales.map((sale) => sale.dataValues);
  }
};