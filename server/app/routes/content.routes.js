const { authJwt } = require("../middleware");
const controller = require("../controllers/content.controller");

module.exports = function(app) {
  // We set the Headers
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // We get the content without token
  app.get("/api/content/all", controller.allAccess);

  // We get the user content
  app.get(
    "/api/content/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  // We get the moderator content
  app.get(
    "/api/content/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  // We get the admin content
  app.get(
    "/api/content/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  // We get the streamer content
  app.get(
    "/api/content/stre",
    [authJwt.verifyToken, authJwt.isStreamer],
    controller.streamerBoard
  );
};
