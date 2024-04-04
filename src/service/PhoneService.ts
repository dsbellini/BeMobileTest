import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IPhoneNumber } from '../Interfaces/interfaces';
import PhoneModel from '../model/PhoneModel';

export default class PhoneService {
  constructor(
    private phoneModel: PhoneModel = new PhoneModel(),
  ) { }

  public async createPhone(phone: IPhoneNumber): Promise<ServiceResponse<IPhoneNumber>> {

    if (!phone.numero || !phone.clienteId) {
      return { status: 'INVALID_DATA',
        data: { message: 'Todos os campos devem ser preenchidos!' } };
    }

    const findPhone = await this.phoneModel.findPhone(phone);

    if (findPhone) {
      return { status: 'INVALID_DATA', data: { message: 'Telefone já cadastrado!' } };
    }

    await this.phoneModel.newPhone(phone);
    return { status: 'SUCCESS', data: { message: 'Telefone cadastrado com sucesso!' }};
  }

  public async findAllPhones(): Promise<ServiceResponse<IPhoneNumber[]>> {
    const allPhones = await this.phoneModel.findAllPhones();
    return { status: 'SUCCESS', data: allPhones };
  }

  public async findPhoneById(id: number): Promise<ServiceResponse<IPhoneNumber>> {
    const phone = await this.phoneModel.findPhoneById(id);
    
    if (!phone) {
      return { status: 'NOT_FOUND', data: { message: 'Telefone não encontrado!' } };
    }

    return { status: 'SUCCESS', data: phone };
  }

  public async updatePhone(id: number, phone: IPhoneNumber): Promise<ServiceResponse<IPhoneNumber>> {
    const updatedPhone = await this.phoneModel.updatePhone(id, phone);
    if (!updatedPhone) {
      return { status: 'NOT_FOUND', data: { message: 'Telefone não encontrado!' } };
    }
    return { status: 'SUCCESS', data: { message: 'Telefone editado com sucesso!' } };
  }

  public async deletePhone(id: number): Promise<ServiceResponse<void>> {
    await this.phoneModel.deletePhone(id);
    return { status: 'SUCCESS', data: { message: 'Telefone deletado com sucesso!' } };
  }
}
