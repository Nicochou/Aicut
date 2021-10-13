const { authJwt } = require("../middleware");
const controller = require("../controllers/comment.controller");

module.exports = function(app) {
 /*
  GET ROUTES
 */
 // Route : get all comments
  app.get(
    "/api/comment/getAllcomment",
    [authJwt.verifyToken],
    controller.getAllComments
  );

 // Route : get a comment by his id
  app.get(
    "/api/comment/getCommentById",
    [authJwt.verifyToken],
    controller.getOneCommentById
  );

 // Route : get all comments by user id
  app.get(
    "/api/comment/getAllCommentByUserId",
    [authJwt.verifyToken],
    controller.getAllCommentByUserId
  );
  /*
  UPDATE ROUTES
  */
  // Route : update one comment
  app.put(
    "/api/comment/updateOneComment",
    [authJwt.verifyToken],
    controller.updateOneComment
  );
  /*
  POST ROUTES
  */
  // Route : update one comment
  app.post(
    "/api/comment/addOneComment",
    [authJwt.verifyToken],
    controller.addOneComment
  );
  /*
  DELETE ROUTES
  */
  // Route : delete one comment by his id
  app.delete(
    "/api/comment/deleteOneComment",
    [authJwt.verifyToken],
    controller.deleteOneComment
  );

  // Route : delete all comments
  app.delete(
    "/api/comment/deleteAllComment",
    [authJwt.verifyToken],
    controller.deleteAllComment
  );
};
