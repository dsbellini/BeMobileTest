"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomerModel_1 = __importDefault(require("../model/CustomerModel"));
const SellModel_1 = __importDefault(require("../model/SellModel"));
class CustomerService {
    constructor(customerModel = new CustomerModel_1.default(), sellModel = new SellModel_1.default()) {
        this.customerModel = customerModel;
        this.sellModel = sellModel;
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
    async findCustomerWithSales(customerId, year, month) {
        const customer = await this.customerModel.findCustomerById(customerId);
        if (!customer) {
            return { status: 'NOT_FOUND', data: { message: 'Cliente não encontrado!' } };
        }
        let sales = await this.sellModel.findSalesByCustomerId(customerId, year, month);
        // Ordena vendas por data em ordem decrescente (mais recentes primeiro)
        sales = sales.sort((a, b) => (a.dataHora > b.dataHora ? -1 : 1));
        return { status: 'SUCCESS', data: { customer, sales } };
    }
}
exports.default = CustomerService;
;
