const { authJwt } = require("../middleware");
const controller = require("../controllers/clip.controller");

module.exports = function(app) {

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

  // Route : update one clip
  app.put(
  "/api/updateOneClip/:id",
  [authJwt.verifyToken],
  controller.updateOneClip
);


 // We get all edits clips by user id
  app.get(
    "/api/getAllClipByUserId",
    [authJwt.verifyToken],
    controller.getAllClipByUserId
  );
  
 // We get all clips by user id
 app.get(
  "/api/getEditClipByUserId",
  [authJwt.verifyToken],
  controller.getClipStatusByUserId
  );
    
};
