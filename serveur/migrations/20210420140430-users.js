'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("Users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      login: {
        type: Sequelize.STRING,
        allowNull: true
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING(3000),
        allowNull: true
      },
      profile_image_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      profile_background_image_url: {
        type: Sequelize.STRING,
        allowNull: true
      },
      isStreamer: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
      },
      id_twitch: {
        type: Sequelize.INTEGER,
        allowNull: true
      }, 
      type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      broadcaster_type: {
        type: Sequelize.STRING,
        allowNull: true
      },
      view_count: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
     await queryInterface.dropTable('Users');
  }
};
