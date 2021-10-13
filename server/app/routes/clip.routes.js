const { authJwt } = require("../middleware");
const controller = require("../controllers/clip.controller");

module.exports = function(app) {
 /*
  GET ROUTES
 */
 // Route : get all clips
  app.get(
    "/api/clip/getAllClip",
    [authJwt.verifyToken],
    controller.getAllClips
  );

 // Route : get a clip by his id
  app.get(
    "/api/clip/getClipById",
    [authJwt.verifyToken],
    controller.getOneClipById
  );

   // Route : get all published clips
   app.get(
    "/api/clip/getAllPublishedClip",
    [authJwt.verifyToken],
    controller.getAllPublishedClips
  );

 // Route : get all clips by user id
  app.get(
    "/api/clip/getAllClipByUserId",
    [authJwt.verifyToken],
    controller.getAllClipByUserId
  );

 // Route : get all published clips by user id
   app.get(
    "/api/clip/getAllPublishedClipByUserId",
    [authJwt.verifyToken],
    controller.getAllPublishedClipByUserId
  );
  /*
  UPDATE ROUTES
  */
  // Route : update one clip
  app.put(
    "/api/clip/updateOneClip",
    [authJwt.verifyToken],
    controller.updateOneClip
  );
  /*
  POST ROUTES
  */
  // Route : update one clip
  app.post(
    "/api/clip/addOneClip",
    [authJwt.verifyToken],
    controller.addOneClip
  );
  /*
  DELETE ROUTES
  */
  // Route : delete one clip by his id
  app.delete(
    "/api/clip/deleteOneClip",
    [authJwt.verifyToken],
    controller.deleteOneClip
  );

  // Route : delete all clips
  app.delete(
    "/api/clip/deleteAllClip",
    [authJwt.verifyToken],
    controller.deleteAllClip
  );
};
