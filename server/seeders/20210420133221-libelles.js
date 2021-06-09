'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Libelle', [{
      id: 101,
      libelle: 'Edit',
      createdAt: new Date,
      updatedAt: new Date,
    }]);

    await queryInterface.bulkInsert('Libelle', [{
      id: 102,
      libelle: 'Create',
      createdAt: new Date,
      updatedAt: new Date,
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Libelle', null, {});
  }
};
