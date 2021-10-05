const { authJwt } = require("../middleware");
const controller = require("../controllers/clip.controller");

module.exports = function(app) {
 /*
  GET ROUTES
 */
 // Route : get all clips
  app.get(
    "/api/getAllClip",
    [authJwt.verifyToken],
    controller.getAllClips
  );

 // Route : get a clip by his id
  app.get(
    "/api/getClipById",
    [authJwt.verifyToken],
    controller.getOneClipById
  );

   // Route : get all published clips
   app.get(
    "/api/getAllPublishedClip",
    [authJwt.verifyToken],
    controller.getAllPublishedClips
  );

 // Route : get all clips by user id
  app.get(
    "/api/getAllClipByUserId",
    [authJwt.verifyToken],
    controller.getAllClipByUserId
  );

 // Route : get all published clips by user id
   app.get(
    "/api/getAllPublishedClipByUserId",
    [authJwt.verifyToken],
    controller.getAllPublishedClipByUserId
  );
  /*
  UPDATE ROUTES
  */
  // Route : update one clip
  app.put(
    "/api/updateOneClip",
    [authJwt.verifyToken],
    controller.updateOneClip
  );
  /*
  POST ROUTES
  */
  // Route : update one clip
  app.post(
    "/api/addOneClip",
    [authJwt.verifyToken],
    controller.addOneClip
  );
  /*
  DELETE ROUTES
  */
  // Route : delete one clip by his id
  app.post(
    "/api/deleteOneClip/:id",
    [authJwt.verifyToken],
    controller.deleteOneClip
  );
  // Route : delete all clips by user id
  app.post(
    "/api/deleteAllClipByUserId",
    [authJwt.verifyToken],
    controller.deleteAllClipByUserId
  );
  // Route : delete all clips
  app.post(
    "/api/deleteAllClip",
    [authJwt.verifyToken],
    controller.deleteAllClip
  );
};
