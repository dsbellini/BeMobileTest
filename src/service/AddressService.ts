import { ServiceResponse } from '../Interfaces/ServiceResponse';
import { IAddress } from '../Interfaces/interfaces';
import AddressModel from '../model/AddressModel';

export default class AddressService {
  constructor(
    private addressModel: AddressModel = new AddressModel(),
  ) { }

  public async createAddress(address: IAddress): Promise<ServiceResponse<IAddress>> {

    if (
      !address.clienteId ||
      !address.rua || 
      !address.numero || 
      !address.bairro || 
      !address.cidade || 
      !address.estado || 
      !address.cep) {
      return { status: 'INVALID_DATA',
        data: { message: 'Todos os campos devem ser preenchidos!' } };
    }
    
    const findAddress = await this.addressModel.findAddress(address);

    if (findAddress) {
      return { status: 'INVALID_DATA', data: { message: 'Endereço já cadastrado!' } };
    }

    await this.addressModel.newAddress(address);
    return { status: 'SUCCESS', data: { message: 'Endereço cadastrado com sucesso!' }};
  }

  public async findAllAddresses(): Promise<ServiceResponse<IAddress[]>> {
    const allAddresses = await this.addressModel.findAllAddresses();
    return { status: 'SUCCESS', data: allAddresses };
  }

  public async findAddressById(id: number): Promise<ServiceResponse<IAddress>> {
    const address = await this.addressModel.findAddressById(id);
    
    if (!address) {
      return { status: 'NOT_FOUND', data: { message: 'Endereço não encontrado!' } };
    }

    return { status: 'SUCCESS', data: address };
  }

  public async updateAddress(id: number, address: IAddress): Promise<ServiceResponse<IAddress>> {
    const updatedAddress = await this.addressModel.updateAddress(id, address);
    if (!updatedAddress) {
      return { status: 'NOT_FOUND', data: { message: 'Endereço não encontrado!' } };
    }
    return { status: 'SUCCESS', data: { message: 'Endereço editado com sucesso!' } };
  }

  public async deleteAddress(id: number): Promise<ServiceResponse<void>> {
    await this.addressModel.deleteAddress(id);
    return { status: 'SUCCESS', data: { message: 'Endereço deletado com sucesso!' } };
  }
}
