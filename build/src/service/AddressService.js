"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AddressModel_1 = __importDefault(require("../model/AddressModel"));
class AddressService {
    constructor(addressModel = new AddressModel_1.default()) {
        this.addressModel = addressModel;
    }
    async createAddress(address) {
        if (!address.clienteId ||
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
        return { status: 'SUCCESS', data: { message: 'Endereço cadastrado com sucesso!' } };
    }
    async findAllAddresses() {
        const allAddresses = await this.addressModel.findAllAddresses();
        return { status: 'SUCCESS', data: allAddresses };
    }
    async findAddressById(id) {
        const address = await this.addressModel.findAddressById(id);
        if (!address) {
            return { status: 'NOT_FOUND', data: { message: 'Endereço não encontrado!' } };
        }
        return { status: 'SUCCESS', data: address };
    }
    async updateAddress(id, address) {
        const updatedAddress = await this.addressModel.updateAddress(id, address);
        if (!updatedAddress) {
            return { status: 'NOT_FOUND', data: { message: 'Endereço não encontrado!' } };
        }
        return { status: 'SUCCESS', data: { message: 'Endereço editado com sucesso!' } };
    }
    async deleteAddress(id) {
        await this.addressModel.deleteAddress(id);
        return { status: 'SUCCESS', data: { message: 'Endereço deletado com sucesso!' } };
    }
}
exports.default = AddressService;
