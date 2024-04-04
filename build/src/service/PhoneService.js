"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PhoneModel_1 = __importDefault(require("../model/PhoneModel"));
class PhoneService {
    constructor(phoneModel = new PhoneModel_1.default()) {
        this.phoneModel = phoneModel;
    }
    async createPhone(phone) {
        if (!phone.numero || !phone.clienteId) {
            return { status: 'INVALID_DATA',
                data: { message: 'Todos os campos devem ser preenchidos!' } };
        }
        const findPhone = await this.phoneModel.findPhone(phone);
        if (findPhone) {
            return { status: 'INVALID_DATA', data: { message: 'Telefone já cadastrado!' } };
        }
        await this.phoneModel.newPhone(phone);
        return { status: 'SUCCESS', data: { message: 'Telefone cadastrado com sucesso!' } };
    }
    async findAllPhones() {
        const allPhones = await this.phoneModel.findAllPhones();
        return { status: 'SUCCESS', data: allPhones };
    }
    async findPhoneById(id) {
        const phone = await this.phoneModel.findPhoneById(id);
        if (!phone) {
            return { status: 'NOT_FOUND', data: { message: 'Telefone não encontrado!' } };
        }
        return { status: 'SUCCESS', data: phone };
    }
    async updatePhone(id, phone) {
        const updatedPhone = await this.phoneModel.updatePhone(id, phone);
        if (!updatedPhone) {
            return { status: 'NOT_FOUND', data: { message: 'Telefone não encontrado!' } };
        }
        return { status: 'SUCCESS', data: { message: 'Telefone editado com sucesso!' } };
    }
    async deletePhone(id) {
        await this.phoneModel.deletePhone(id);
        return { status: 'SUCCESS', data: { message: 'Telefone deletado com sucesso!' } };
    }
}
exports.default = PhoneService;
