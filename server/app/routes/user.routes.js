const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
 /*
  GET ROUTES
 */
 // Route : get all users
  app.get(
    "/api/getAllUser",
    [authJwt.verifyToken],
    controller.getAllUsers
  );

 // Route : get a user by his id
  app.get(
    "/api/getUserById",
    [authJwt.verifyToken],
    controller.getOneUserById
  );
  /*
  UPDATE ROUTES
  */
  // Route : update one user
  app.put(
    "/api/updateOneUser",
    [authJwt.verifyToken],
    controller.updateOneUser
  );
  /*
  DELETE ROUTES
  */
  // Route : delete one user by his id
  app.delete(
    "/api/deleteOneUser",
    [authJwt.verifyToken],
    controller.deleteOneUser
  );

  // Route : delete all users
  app.delete(
    "/api/deleteAllUser",
    [authJwt.verifyToken],
    controller.deleteAllUser
  );
};
