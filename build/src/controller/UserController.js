"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapStatus_1 = __importDefault(require("../utils/mapStatus"));
const UserService_1 = __importDefault(require("../service/UserService"));
class LoginController {
    constructor(userService = new UserService_1.default()) {
        this.userService = userService;
    }
    async createUser(req, res) {
        const { email, senha } = req.body;
        const serviceResponse = await this.userService.createUser({ email, senha });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
    async login(req, res) {
        const { email, senha } = req.body;
        const serviceResponse = await this.userService.login({ email, senha });
        return res.status((0, mapStatus_1.default)(serviceResponse.status)).json(serviceResponse.data);
    }
}
exports.default = LoginController;
