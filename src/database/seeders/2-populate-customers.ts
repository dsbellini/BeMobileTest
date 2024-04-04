import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
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

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Clientes', {});
  },
}
