module.exports = (sequelize, Sequelize) => {
  const UserMl = sequelize.define("user_machinelearning", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_user: {
      type: Sequelize.STRING,
      allowNull: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: true
    }
  });

  return UserMl;
};
