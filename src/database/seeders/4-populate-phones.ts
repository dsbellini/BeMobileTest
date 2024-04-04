import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Telefones', [
      {
        "clienteId": 1,
        "numero": 1120201010,
      },
      {
        "clienteId": 2,
        "numero": 1130302020,
      },
      {
        "clienteId": 3,
        "numero": 1120301020,
      },
      {
        "clienteId": 4,
        "numero": 1120202010,
      },
      {
        "clienteId": 5,
        "numero": 2110201010,
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Telefones', {});
  },
}
