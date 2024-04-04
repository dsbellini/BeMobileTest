import UserModel from '../model/UserModel';
import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { ICustomer, ISell, IUsuario } from '../Interfaces/interfaces';
import CustomerModel from '../model/CustomerModel';
import SellModel from '../model/SellModel';

export type Token = {
  token: string,
};

export default class CustomerService {
  constructor(
    private customerModel: CustomerModel = new CustomerModel(),
    private sellModel: SellModel = new SellModel(),
  ) { }

  public async createCustomer(customer: ICustomer): Promise<ServiceResponse<ICustomer>> {

    if (!customer.nome || !customer.cpf) {
      return { status: 'INVALID_DATA',
        data: { message: 'Todos os campos devem ser preenchidos!' } };
    }

    const findUser = await this.customerModel.findCustomer(customer);

    if (findUser) {
      return { status: 'INVALID_DATA', data: { message: 'Cliente já cadastrado!' } };
    }

    await this.customerModel.newCustomer(customer);
    return { status: 'SUCCESS', data: {message: 'Cliente cadastrado com sucesso!'}};
  }

  public async findAllCustomers(): Promise<ServiceResponse<ICustomer[]>> {
    const allCustomers = await this.customerModel.findAllCustomers();
    return { status: 'SUCCESS', data: allCustomers };
  }

  public async findCustomerById(id: number): Promise<ServiceResponse<ICustomer>> {
    const customer = await this.customerModel.findCustomerById(id);
    if (!customer) {
      return { status: 'NOT_FOUND', data: { message: 'Cliente não encontrado!' } };
  }
  return { status: 'SUCCESS', data: customer };
};

public async updateCustomer(id: number, customer: ICustomer): Promise<ServiceResponse<ICustomer>> {
  const updatedCustomer = await this.customerModel.updateCustomer(id, customer);
  if (!updatedCustomer) {
    return { status: 'NOT_FOUND', data: { message: 'Cliente não encontrado!' } };
  }
  return { status: 'SUCCESS', data: {message: 'Cliente editado com sucesso!'} };
};

public async deleteCustomer(id: number): Promise<ServiceResponse<void>> {
  await this.customerModel.deleteCustomer(id);
  return { status: 'SUCCESS', data: { message: 'Cliente deletado com sucesso!' } };
};

public async findCustomerWithSales(customerId: number, year?: number, month?: number): 
Promise<ServiceResponse<{ customer: ICustomer, sales: ISell[] }>> {
    const customer = await this.customerModel.findCustomerById(customerId);
    
    if (!customer) {
      return { status: 'NOT_FOUND', data: { message: 'Cliente não encontrado!' } };
    }

    let sales: ISell[] = await this.sellModel.findSalesByCustomerId(customerId, year, month);

    // Ordena vendas por data em ordem decrescente (mais recentes primeiro)
    sales = sales.sort((a, b) => (a.dataHora > b.dataHora ? -1 : 1));

    return { status: 'SUCCESS', data: { customer, sales } };
}

};