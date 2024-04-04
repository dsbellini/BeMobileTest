"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jwt_util_1 = __importDefault(require("../utils/jwt.util"));
function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Token de autenticação não fornecido.' });
    }
    try {
        const payload = jwt_util_1.default.verify(token);
        req.headers = payload;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: 'Token de autenticação inválido.' });
    }
}
exports.verifyToken = verifyToken;
