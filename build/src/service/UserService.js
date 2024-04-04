"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcryptjs"));
const UserModel_1 = __importDefault(require("../model/UserModel"));
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
class LoginService {
    constructor(userModel = new UserModel_1.default()) {
        this.userModel = userModel;
    }
    async createUser(user) {
        if (!user.email || !user.senha) {
            return { status: 'INVALID_DATA',
                data: { message: 'Todos os campos devem ser preenchidos!' } };
        }
        const hashedPassword = await bcrypt.hash(user.senha, 5);
        const userToCreate = { ...user, senha: hashedPassword };
        const findUser = await this.userModel.findUser(user);
        if (findUser) {
            return { status: 'INVALID_DATA', data: { message: 'Usuário já cadastrado!' } };
        }
        await this.userModel.newUser(userToCreate);
        return { status: 'SUCCESS', data: { message: 'Usuário cadastrado com sucesso!' } };
    }
    async login(login) {
        if (!login.email || !login.senha) {
            return { status: 'INVALID_DATA',
                data: { message: 'Todos os campos devem ser preenchidos!' } };
        }
        const findUser = await this.userModel.findUser(login);
        if (!findUser) {
            return { status: 'UNAUTHORIZED', data: { message: 'Usuário não encontrado' } };
        }
        const { senha } = findUser;
        if (!bcrypt.compareSync(login.senha, senha)) {
            return { status: 'UNAUTHORIZED', data: { message: 'Dados incorretos. Tente novamente' } };
        }
        const { email } = findUser;
        const token = jwt_util_1.default.sign({ email });
        return { status: 'SUCCESS', data: { token } };
    }
}
exports.default = LoginService;
