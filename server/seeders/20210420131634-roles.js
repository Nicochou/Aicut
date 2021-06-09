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
     await queryInterface.bulkInsert('Roles', [{
      id: 1,
      name: 'user',
      createdAt: new Date,
      updatedAt: new Date,
    }]);

    await queryInterface.bulkInsert('Roles', [{
      id: 2,
      name: 'moderator',
      createdAt: new Date,
      updatedAt: new Date,
    }]);

    await queryInterface.bulkInsert('Roles', [{
      id: 3,
      name: 'admin',
      createdAt: new Date,
      updatedAt: new Date,
    }]);

    await queryInterface.bulkInsert('Roles', [{
      id: 4,
      name: 'streamer',
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
     await queryInterface.bulkDelete('Roles', null, {});
  }
};
