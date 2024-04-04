"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatus_1 = __importDefault(require("../utils/mapStatus"));
const PhoneService_1 = __importDefault(require("../service/PhoneService"));
class PhoneController {
    constructor(phoneService = new PhoneService_1.default()) {
        this.phoneService = phoneService;
    }
    async createPhone(req, res) {
        const { clienteId, numero } = req.body;
        const serviceResponse = await this.phoneService.createPhone({ clienteId, numero });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async findAllPhones(req, res) {
        const serviceResponse = await this.phoneService.findAllPhones();
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async findPhoneById(req, res) {
        const { id } = req.params;
        const serviceResponse = await this.phoneService.findPhoneById(Number(id));
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async updatePhone(req, res) {
        const { id } = req.params;
        const { clienteId, numero } = req.body;
        const serviceResponse = await this.phoneService.updatePhone(Number(id), { clienteId, numero });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async deletePhone(req, res) {
        const { id } = req.params;
        const serviceResponse = await this.phoneService.deletePhone(Number(id));
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = PhoneController;
