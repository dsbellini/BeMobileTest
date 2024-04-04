"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Clientes', [
            {
                "nome": "Lewis Hamilton",
                "cpf": 123456
            },
            {
                "nome": "Sebastian Vettel",
                "cpf": 987654
            },
            {
                "nome": "Max Verstappen",
                "cpf": 654321
            },
            {
                "nome": "Valtteri Bottas",
                "cpf": 135790
            },
            {
                "nome": "Daniel Ricciardo",
                "cpf": 246809
            },
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Clientes', {});
    },
};
