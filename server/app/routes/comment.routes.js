const { authJwt } = require("../middleware");
const controller = require("../controllers/comment.controller");

module.exports = function(app) {
 /*
  GET ROUTES
 */
 // Route : get all comments
  app.get(
    "/api/getAllcomment",
    [authJwt.verifyToken],
    controller.getAllComments
  );

 // Route : get a comment by his id
  app.get(
    "/api/getCommentById",
    [authJwt.verifyToken],
    controller.getOneCommentById
  );

 // Route : get all comments by user id
  app.get(
    "/api/getAllCommentByUserId",
    [authJwt.verifyToken],
    controller.getAllCommentByUserId
  );
  /*
  UPDATE ROUTES
  */
  // Route : update one comment
  app.put(
    "/api/updateOneComment",
    [authJwt.verifyToken],
    controller.updateOneComment
  );
  /*
  POST ROUTES
  */
  // Route : update one comment
  app.post(
    "/api/addOneComment",
    [authJwt.verifyToken],
    controller.addOneComment
  );
  /*
  DELETE ROUTES
  */
  // Route : delete one comment by his id
  app.delete(
    "/api/deleteOneComment",
    [authJwt.verifyToken],
    controller.deleteOneComment
  );

  // Route : delete all comments
  app.delete(
    "/api/deleteAllComment",
    [authJwt.verifyToken],
    controller.deleteAllComment
  );
};
