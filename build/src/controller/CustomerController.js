"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatus_1 = __importDefault(require("../utils/mapStatus"));
const CustomerService_1 = __importDefault(require("../service/CustomerService"));
class LoginController {
    constructor(customerService = new CustomerService_1.default()) {
        this.customerService = customerService;
    }
    async createCustomer(req, res) {
        const { nome, cpf } = req.body;
        const serviceResponse = await this.customerService.createCustomer({ nome, cpf });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async findAllCustomers(req, res) {
        const serviceResponse = await this.customerService.findAllCustomers();
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async findCustomerById(req, res) {
        const { id } = req.params;
        const serviceResponse = await this.customerService.findCustomerById(Number(id));
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async updateCustomer(req, res) {
        const { id } = req.params;
        const { nome, cpf } = req.body;
        const serviceResponse = await this.customerService.updateCustomer(Number(id), { nome, cpf });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async deleteCustomer(req, res) {
        const { id } = req.params;
        const serviceResponse = await this.customerService.deleteCustomer(Number(id));
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = LoginController;
