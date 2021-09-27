module.exports = (sequelize, Sequelize) => {
  const UserMl = sequelize.define("user_machinelearning", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true
    },
    nb_messages_total: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    nb_messages_subscriber: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    nb_messages_emot: {
      type: Sequelize.INTEGER,
      allowNull: true
    }
  });

  return UserMl;
};
