"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SequelizeUser_1 = __importDefault(require("../database/models/SequelizeUser"));
class UserModel {
    constructor() {
        this.model = SequelizeUser_1.default;
    }
    async newUser(user) {
        const newUser = await this.model.create(user);
        return newUser.dataValues;
    }
    async findUser(user) {
        const userData = await this.model.findOne({ where: { email: user.email } });
        if (!userData) {
            return null;
        }
        return userData.dataValues;
    }
}
exports.default = UserModel;
