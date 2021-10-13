const config = require("../config/config.json");
const Sequelize = require("sequelize");

if (process.env.NODE_ENV === "PROD") {
  var sequelize = new Sequelize(
    config.production.database,
    config.production.username,
    config.production.password,
    {
      host: config.production.host,
      dialect: config.production.dialect,
      operatorsAliases: false,
  
      pool: {
        max: config.production.pool.max,
        min: config.production.pool.min,
        acquire: config.production.pool.acquire,
        idle: config.production.pool.idle
      }
    }
  );
} else if(process.env.NODE_ENV === "TEST") {
  var sequelize = new Sequelize(
    config.test.database,
    config.test.username,
    config.test.password,
    {
      host: config.test.host,
      dialect: config.test.dialect,
      operatorsAliases: false,
  
      pool: {
        max: config.test.pool.max,
        min: config.test.pool.min,
        acquire: config.test.pool.acquire,
        idle: config.test.pool.idle
      }
    }
  );
} else if(process.env.NODE_ENV === "DEV") {
  var sequelize = new Sequelize(
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
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./users.model.js")(sequelize, Sequelize);
db.role = require("./roles.model.js")(sequelize, Sequelize);
db.clip = require("./clips.model.js")(sequelize, Sequelize);
db.comment = require("./comments.model.js")(sequelize, Sequelize);
db.userMl = require("../models/user_ml.model.js")(sequelize, Sequelize);

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

db.user.hasMany(db.clip, { as: "clips" });
db.clip.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});

db.user.hasMany(db.comment, { as: "comments" });
db.comment.belongsTo(db.user, {
  foreignKey: "userId",
  as: "users",
});

db.clip.hasMany(db.comment, { as: "comments" });
db.comment.belongsTo(db.clip, {
  foreignKey: "clipId",
  as: "clips",
});

db.ROLES = ["user", "admin", "moderator","streamer"];

module.exports = db;
