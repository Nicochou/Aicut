'use strict';
var bcrypt = require("bcryptjs");

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
     await queryInterface.bulkInsert('Users', [{
      id: 3,
      login: 'Admin',
      username: 'admin',
      email: 'admin@admin.com',
      password: bcrypt.hashSync('admin'),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra, est at fringilla lacinia, neque velit hendrerit quam, id faucibus nisi nibh sed metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi tempus vitae nisl id tincidunt. Nunc vulputate ultricies nunc quis porta. In hac habitasse platea dictumst. Morbi pellentesque velit augue, et faucibus risus egestas a. Quisque bibendum dapibus nisi, et porta nisl vehicula feugiat. Nulla facilisi. Vestibulum quis fringilla sapien. Integer ultricies lorem tincidunt, gravida diam in, pulvinar quam. Donec dictum fringilla faucibus. Vivamus vitae eleifend lorem, a lacinia orci. Maecenas id placerat ex, vel viverra mauris. ',
      profile_image_url: 'https://findicons.com/files/icons/2715/community_icons_and_forum_rank_icons/256/admin.png',
      createdAt: new Date,
      updatedAt: new Date,
    }]);

    await queryInterface.bulkInsert('User_roles', [{
      roleId: 1,
      userId: 3,
      createdAt: new Date,
      updatedAt: new Date,
    }]);

    await queryInterface.bulkInsert('User_roles', [{
      roleId: 2,
      userId: 3,
      createdAt: new Date,
      updatedAt: new Date,
    }]);

    await queryInterface.bulkInsert('User_roles', [{
      roleId: 3,
      userId: 3,
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
     await queryInterface.bulkDelete('Users', null, {});
  }
};
