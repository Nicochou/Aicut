const db = require("../../models");
const Userservices = require("../services/user.service");
const Op = db.Sequelize.Op;

// Manage Pagination Controller
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? +page : 0;

  return { limit, offset };
};

/*
  GET CONTROLLER
*/
// Retrieve all users from the database
exports.getAllUsers = async function (req, res, next) {
  // We validate request parameters
  const { page, size , title} = req.query;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  // We set the pagination
  const { limit, offset } = getPagination(page, size);
  try {
      var users = await Userservices.findAllUsers({where : condition}, limit, offset)
      return res.status(200).json({ status: 200, data: users, message: "Succesfully users Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// Find a single user with an id
exports.getOneUserById = async function (req, res, next) {
  // We validate request parameters
  const id = req.query.id;
  try {
    var user = await Userservices.findOneUser(id)
    return res.status(200).json({ status: 200, data: user, message: "Succesfully user Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}

/*
  PUT CONTROLLER
*/
// Modify one user from the database
exports.updateOneUser = async function (req, res, next) {
  // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  // Create objet
  const { userId } = req.query;
  const condition =  userId ? { id: userId } : null;
  var user = {
    username: req.body.username ? req.body.username : null,
    email: req.body.email ? req.body.email : null,
    description: req.body.description ? req.body.description : null,
    profile_image_url: req.body.profile_image_url ? req.body.profile_image_url : null,
    profile_background_image_url: req.body.profile_background_image_url ? req.body.profile_background_image_url : null,
    type: req.body.type ? req.body.type : null,
    brodcaster_type: req.body.brodcaster_type ? req.body.brodcaster_type : null,
  };
  try {
      var users = await Userservices.update(condition, user)
      return res.status(200).json({ status: 200, data: users, message: "Succesfully user Modified" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

/*
  DELETE CONTROLLER
*/
// Delete one user from the database
exports.deleteOneUser = async function (req, res, next) {
  // We validate request parameters
  const {id} = req.query;
  try {
      var users = await Userservices.delOne(id)
      return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Deleted" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// Delete all users the database
exports.deleteAllUser = async function (req, res, next) {
  try {
      var users = await Userservices.delAll()
      return res.status(200).json({ status: 200, data: users, message: "Succesfully All Users Deleted" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};
