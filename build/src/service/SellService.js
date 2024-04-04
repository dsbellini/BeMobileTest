"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SellModel_1 = __importDefault(require("../model/SellModel"));
class SellService {
    constructor() {
        this.sellModel = new SellModel_1.default();
    }
    async createSell(produtoId, clienteId, quantidade, precoUnitario, precoTotal) {
        if (!produtoId || !clienteId || !quantidade || !precoUnitario || !precoTotal) {
            return { status: 'INVALID_DATA',
                data: { message: 'Todos os campos devem ser preenchidos!' } };
        }
        const sellData = {
            produtoId,
            clienteId,
            quantidade,
            precoUnitario,
            precoTotal,
            dataHora: new Date(),
        };
        await this.sellModel.newSell(sellData);
        return { status: 'SUCCESS', data: { message: "Venda cadastrada com sucesso!" } };
    }
}
exports.default = SellService;
