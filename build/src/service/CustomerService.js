"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerModel_1 = __importDefault(require("../model/CustomerModel"));
class CustomerService {
    constructor(customerModel = new CustomerModel_1.default()) {
        this.customerModel = customerModel;
    }
    async createCustomer(customer) {
        if (!customer.nome || !customer.cpf) {
            return { status: 'INVALID_DATA',
                data: { message: 'Todos os campos devem ser preenchidos!' } };
        }
        const findUser = await this.customerModel.findCustomer(customer);
        if (findUser) {
            return { status: 'INVALID_DATA', data: { message: 'Cliente já cadastrado!' } };
        }
        await this.customerModel.newCustomer(customer);
        return { status: 'SUCCESS', data: { message: 'Cliente cadastrado com sucesso!' } };
    }
    async findAllCustomers() {
        const allCustomers = await this.customerModel.findAllCustomers();
        return { status: 'SUCCESS', data: allCustomers };
    }
    async findCustomerById(id) {
        const customer = await this.customerModel.findCustomerById(id);
        if (!customer) {
            return { status: 'NOT_FOUND', data: { message: 'Cliente não encontrado!' } };
        }
        return { status: 'SUCCESS', data: customer };
    }
    ;
    async updateCustomer(id, customer) {
        const updatedCustomer = await this.customerModel.updateCustomer(id, customer);
        if (!updatedCustomer) {
            return { status: 'NOT_FOUND', data: { message: 'Cliente não encontrado!' } };
        }
        return { status: 'SUCCESS', data: { message: 'Cliente editado com sucesso!' } };
    }
    ;
    async deleteCustomer(id) {
        await this.customerModel.deleteCustomer(id);
        return { status: 'SUCCESS', data: { message: 'Cliente deletado com sucesso!' } };
    }
    ;
}
exports.default = CustomerService;
;
