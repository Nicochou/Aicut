const { authJwt } = require("../middleware");
const controller = require("../controllers/clip.controller");

module.exports = function(app) {

 // We get all clips
  app.get(
    "/api/getAllClip",
    [authJwt.verifyToken],
    controller.getAllClips
  );

 // We get a clip by his id
  app.get(
    "/api/getClipById",
    [authJwt.verifyToken],
    controller.getClipById
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
