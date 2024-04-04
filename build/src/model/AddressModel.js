"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeAddress_1 = __importDefault(require("../database/models/SequelizeAddress"));
class AddressModel {
    constructor() {
        this.model = SequelizeAddress_1.default;
    }
    async newAddress(address) {
        const newAddress = await this.model.create(address);
        return newAddress.dataValues;
    }
    async findAddress(address) {
        const findAddress = await this.model.findOne({ where: { numero: address.numero } });
        if (!findAddress) {
            return null;
        }
        return findAddress.dataValues;
    }
    async findAllAddresses() {
        const allAddresses = await this.model.findAll();
        return allAddresses.map(address => address.dataValues);
    }
    async findAddressById(id) {
        const address = await this.model.findByPk(id);
        if (!address) {
            return null;
        }
        return address === null || address === void 0 ? void 0 : address.dataValues;
    }
    async updateAddress(id, address) {
        await this.model.update(address, { where: { id } });
        return address;
    }
    async deleteAddress(id) {
        await this.model.destroy({ where: { id } });
    }
}
exports.default = AddressModel;
;
