import { ICustomer, IUsuario } from '../database/interfaces';
import SequelizeCustomer from '../database/models/SequelizeCustomer';
import SequelizeUser from '../database/models/SequelizeUser';

export default class CustomerModel {
  private model = SequelizeCustomer;

  public async newCustomer(user: ICustomer): Promise<ICustomer> {
    const newCustomer = await this.model.create(user);
    return newCustomer.dataValues;
  }

  public async findCustomer(user: ICustomer): Promise<ICustomer | null> {
    const userData = await this.model.findOne({ where: { cpf: user.cpf } });
    if (!userData) {
      return null;
    }
    return userData.dataValues;
  }

  public async findAllCustomers(): Promise<ICustomer[]> {
    const allCustomers = await this.model.findAll();
    return allCustomers.map((customer) => customer.dataValues);
  }

  public async findCustomerById(id: number): Promise<ICustomer | null> {
    const customer = await this.model.findByPk(id);
    if (!customer) {
      return null;
    }
    return customer.dataValues;
  }

  public async updateCustomer(id: number, user: ICustomer): Promise<ICustomer | null> {
    await this.model.update(user, { where: { id } });
    const updatedCustomer = await this.model.findByPk(id);
    if (!updatedCustomer) {
      return null;
    }
    return updatedCustomer.dataValues;
  }

  public async deleteCustomer(id: number): Promise<void> {
    await this.model.destroy({ where: { id } });
  }
}
