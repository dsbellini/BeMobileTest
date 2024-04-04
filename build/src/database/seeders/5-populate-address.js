"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Enderecos', [
            {
                "clienteId": 1,
                "rua": "Rua A",
                "numero": 10,
                "bairro": "Bairro A",
                "cidade": "Cidade A",
                "estado": "Estado A",
                "cep": 12345678,
                "complemento": "Complemento A"
            },
            {
                "clienteId": 2,
                "rua": "Rua B",
                "numero": 20,
                "bairro": "Bairro B",
                "cidade": "Cidade B",
                "estado": "Estado B",
                "cep": 23456789,
                "complemento": "Complemento B"
            },
            {
                "clienteId": 3,
                "rua": "Rua C",
                "numero": 30,
                "bairro": "Bairro C",
                "cidade": "Cidade C",
                "estado": "Estado C",
                "cep": 34567890,
                "complemento": "Complemento C"
            },
            {
                "clienteId": 4,
                "rua": "Rua D",
                "numero": 40,
                "bairro": "Bairro D",
                "cidade": "Cidade D",
                "estado": "Estado D",
                "cep": 45678901,
                "complemento": "Complemento D"
            },
            {
                "clienteId": 5,
                "rua": "Rua E",
                "numero": 50,
                "bairro": "Bairro E",
                "cidade": "Cidade E",
                "estado": "Estado E",
                "cep": 56789012,
                "complemento": "Complemento E"
            }
        ], {});
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Enderecos', {});
    },
};
