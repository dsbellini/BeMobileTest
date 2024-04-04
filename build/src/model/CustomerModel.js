"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeCustomer_1 = __importDefault(require("../database/models/SequelizeCustomer"));
class CustomerModel {
    constructor() {
        this.model = SequelizeCustomer_1.default;
    }
    async newCustomer(user) {
        const newCustomer = await this.model.create(user);
        return newCustomer.dataValues;
    }
    async findCustomer(user) {
        const userData = await this.model.findOne({ where: { cpf: user.cpf } });
        if (!userData) {
            return null;
        }
        return userData.dataValues;
    }
    async findAllCustomers() {
        const allCustomers = await this.model.findAll();
        return allCustomers.map((customer) => customer.dataValues);
    }
    async findCustomerById(id) {
        const customer = await this.model.findByPk(id);
        if (!customer) {
            return null;
        }
        return customer.dataValues;
    }
    async updateCustomer(id, user) {
        await this.model.update(user, { where: { id } });
        const updatedCustomer = await this.model.findByPk(id);
        if (!updatedCustomer) {
            return null;
        }
        return updatedCustomer.dataValues;
    }
    async deleteCustomer(id) {
        await this.model.destroy({ where: { id } });
    }
}
exports.default = CustomerModel;
