"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizePhone_1 = __importDefault(require("../database/models/SequelizePhone"));
class PhoneModel {
    constructor() {
        this.model = SequelizePhone_1.default;
    }
    async newPhone(phone) {
        const newPhone = await this.model.create(phone);
        return newPhone.dataValues;
    }
    async findPhone(phone) {
        const findPhone = await this.model.findOne({ where: { numero: phone.numero } });
        if (!findPhone) {
            return null;
        }
        return findPhone.dataValues;
    }
    async findAllPhones() {
        const allPhones = await this.model.findAll();
        return allPhones.map(phone => phone.dataValues);
    }
    async findPhoneById(id) {
        const phone = await this.model.findByPk(id);
        if (!phone) {
            return null;
        }
        return phone === null || phone === void 0 ? void 0 : phone.dataValues;
    }
    async updatePhone(id, phone) {
        await this.model.update(phone, { where: { id } });
        return phone;
    }
    async deletePhone(id) {
        await this.model.destroy({ where: { id } });
    }
}
exports.default = PhoneModel;
;
