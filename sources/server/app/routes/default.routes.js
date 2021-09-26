const { authJwt } = require("../middleware");
const controller = require("../controllers/default.controller");

module.exports = function(app) {
  // We set the Headers
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  // We test the api route Success
  app.get("/api/testSuccess", controller.testSuccess);

  // We test the api route Error
  app.get("/api/testError", controller.testError);

  // We test the api route Unauthorize
  app.get("/api/testAuthorize", 
  [authJwt.verifyToken],
  controller.testAuthorize
  );

  // simple route
    app.get("/", (req, res) => {
        res.json({ message: "Serveur AICUT lancé" });
    });
};
