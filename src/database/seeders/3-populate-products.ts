import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Produtos', [
      {
        "nome": "Carro",
        "descricao": "Ferrari",
        "preco": 1000000
      },
      {
        "nome": "Moto",
        "descricao": "Harley Davidson",
        "preco": 50000
      },
      {
        "nome": "Bicicleta",
        "descricao": "Caloi",
        "preco": 1000
      },
      {
        "nome": "Casa",
        "descricao": "Casa na praia",
        "preco": 500000
      },
      {
        "nome": "Apartamento",
        "descricao": "Apartamento na cidade",
        "preco": 300000
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Produtos', {});
  },
}
