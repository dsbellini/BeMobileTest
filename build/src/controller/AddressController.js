"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatus_1 = __importDefault(require("../utils/mapStatus"));
const AddressService_1 = __importDefault(require("../service/AddressService"));
class AddressController {
    constructor(addressService = new AddressService_1.default()) {
        this.addressService = addressService;
    }
    async createAddress(req, res) {
        const { clienteId, rua, numero, bairro, cidade, estado, cep, complemento } = req.body;
        const serviceResponse = await this.addressService.createAddress({
            clienteId, rua, numero, bairro, cidade, estado, cep, complemento,
        });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async findAllAddresses(req, res) {
        const serviceResponse = await this.addressService.findAllAddresses();
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async findAddressById(req, res) {
        const { id } = req.params;
        const serviceResponse = await this.addressService.findAddressById(Number(id));
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async updateAddress(req, res) {
        const { id } = req.params;
        const { clienteId, rua, numero, bairro, cidade, estado, cep, complemento } = req.body;
        const serviceResponse = await this.addressService.updateAddress(Number(id), {
            clienteId, rua, numero, bairro, cidade, estado, cep, complemento,
        });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async deleteAddress(req, res) {
        const { id } = req.params;
        const serviceResponse = await this.addressService.deleteAddress(Number(id));
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = AddressController;
