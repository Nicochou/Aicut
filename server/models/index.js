const config = require("../config/config.json");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    operatorsAliases: false,

    pool: {
      max: config.development.pool.max,
      min: config.development.pool.min,
      acquire: config.development.pool.acquire,
      idle: config.development.pool.idle
    }
  }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.clip = require("../models/clip.model.js")(sequelize, Sequelize);
db.userMl = require("../models/user-ml.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.clip.belongsToMany(db.user, {
  through: "user_clips",
  foreignKey: "clipId",
  otherKey: "userId"
});
db.user.belongsToMany(db.clip, {
  through: "user_clips",
  foreignKey: "userId",
  otherKey: "clipId"
});

db.ROLES = ["user", "admin", "moderator","streamer"];

module.exports = db;
