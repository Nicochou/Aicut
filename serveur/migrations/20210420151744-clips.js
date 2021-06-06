'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     await queryInterface.createTable("Clips", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      status:{
        type: Sequelize.STRING,
      },
      provider:{
        type: Sequelize.STRING,
      },
      id_twitch:{
        type: Sequelize.STRING,
      },
      url:{
        type: Sequelize.STRING,
      },
      embed_url:{
        type: Sequelize.STRING,
      },
      broadcaster_id:{
        type: Sequelize.STRING,
      },
      broadcaster_name:{
        type: Sequelize.STRING,
      },
      creator_id:{
        type: Sequelize.STRING,
      },
      creator_name:{
        type: Sequelize.STRING,
      },
      video_id:{
        type: Sequelize.STRING,
      },
      game_id:{
        type: Sequelize.STRING,
      },
      language:{
        type: Sequelize.STRING,
      },
      title:{
        type: Sequelize.STRING,
      },
      view_count:{
        type: Sequelize.INTEGER,
      },
      created_at_on_twitch:{
        type: Sequelize.STRING,
      },
      thumbnail_url:{
        type: Sequelize.STRING,
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
     await queryInterface.dropTable('Clips');
  }
};
