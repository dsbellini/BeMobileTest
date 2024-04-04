import { IAddress } from '../Interfaces/interfaces';
import SequelizeAdress from '../database/models/SequelizeAddress';

export default class AddressModel {
  private model = SequelizeAdress;

  public async newAddress(address: IAddress): Promise<IAddress> {
    const newAddress = await this.model.create(address);
    return newAddress.dataValues;
  }

  public async findAddress(address: IAddress): Promise<IAddress | null> {
    const findAddress = await this.model.findOne({ where: {numero: address.numero} });
    if (!findAddress) {
      return null;
    }
    return findAddress.dataValues;
  }

  public async findAllAddresses(): Promise<IAddress[]> {
    const allAddresses = await this.model.findAll();
    return allAddresses.map(address => address.dataValues);
  }

  public async findAddressById(id: number): Promise<IAddress | null> {
    const address = await this.model.findByPk(id);
    if (!address) {
      return null;
    }
    return address?.dataValues;
  }

  public async updateAddress(id: number, address: IAddress): Promise<IAddress> {
    await this.model.update(address, { where: { id } });
    return address;
  }

  public async deleteAddress(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
};
