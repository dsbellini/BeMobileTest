"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatus_1 = __importDefault(require("../utils/mapStatus"));
const SellService_1 = __importDefault(require("../service/SellService"));
class SellController {
    constructor(sellService = new SellService_1.default()) {
        this.sellService = sellService;
    }
    async createSell(req, res) {
        const { produtoId, clienteId, quantidade, precoUnitario, precoTotal } = req.body;
        const serviceResponse = await this.sellService.createSell(produtoId, clienteId, quantidade, precoUnitario, precoTotal);
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = SellController;
;
