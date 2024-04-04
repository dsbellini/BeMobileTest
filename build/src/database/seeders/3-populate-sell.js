"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomDate_1 = __importDefault(require("../../utils/randomDate"));
exports.default = {
    up: async (queryInterface) => {
        const startDate = new Date('2022-01-01');
        const endDate = new Date('2024-12-31');
        await queryInterface.bulkInsert('Vendas', [
            {
                "clienteId": 1,
                "produtoId": 2,
                "quantidade": 2,
                "precoUnitario": 100,
                "precoTotal": 200,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 1,
                "produtoId": 3,
                "quantidade": 3,
                "precoUnitario": 150,
                "precoTotal": 450,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 2,
                "produtoId": 3,
                "quantidade": 1,
                "precoUnitario": 200,
                "precoTotal": 200,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 2,
                "produtoId": 4,
                "quantidade": 2,
                "precoUnitario": 250,
                "precoTotal": 500,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 3,
                "produtoId": 4,
                "quantidade": 2,
                "precoUnitario": 300,
                "precoTotal": 600,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 3,
                "produtoId": 5,
                "quantidade": 1,
                "precoUnitario": 350,
                "precoTotal": 350,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 4,
                "produtoId": 5,
                "quantidade": 3,
                "precoUnitario": 400,
                "precoTotal": 1200,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 4,
                "produtoId": 1,
                "quantidade": 2,
                "precoUnitario": 450,
                "precoTotal": 900,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 5,
                "produtoId": 2,
                "quantidade": 1,
                "precoUnitario": 500,
                "precoTotal": 500,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
            {
                "clienteId": 5,
                "produtoId": 3,
                "quantidade": 2,
                "precoUnitario": 550,
                "precoTotal": 1100,
                "dataHora": (0, randomDate_1.default)(startDate, endDate)
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Vendas', {});
    },
};
