"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const SequelizeSell_1 = __importDefault(require("../database/models/SequelizeSell"));
class SellModel {
    constructor() {
        this.model = SequelizeSell_1.default;
    }
    async newSell(sell) {
        const newSell = await this.model.create(sell);
        return newSell.dataValues;
    }
    async findSalesByCustomerId(customerId, year, month) {
        let whereClause = { clienteId: customerId };
        if (year && month) {
            whereClause = {
                ...whereClause,
                dataHora: {
                    [sequelize_1.Op.and]: [
                        sequelize_1.Sequelize.literal(`YEAR(dataHora) = ${year}`),
                        sequelize_1.Sequelize.literal(`MONTH(dataHora) = ${month}`),
                    ],
                },
            };
        }
        const sales = await this.model.findAll({ where: whereClause });
        return sales.map((sale) => sale.dataValues);
    }
}
exports.default = SellModel;
;
