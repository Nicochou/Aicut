module.exports = (sequelize, Sequelize) => {
    const Libelle = sequelize.define("libelle", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      libelle:{
        type: Sequelize.STRING,
      }
    });
    return Libelle;
  };
  