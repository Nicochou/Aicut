const db = require("../../models");
const Op = db.Sequelize.Op;
const Commentservices = require("../services/comment.service");

// Manage Pagination Controller
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? +page : 0;

  return { limit, offset };
};

/*
  GET CONTROLLER
*/
// Retrieve all comments from the database
exports.getAllComments = async function (req, res, next) {
  // We validate request parameters
  const { page, size , title} = req.query;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  // We set the pagination
  const { limit, offset } = getPagination(page, size);
  try {
      var comments = await Commentservices.findAllComments({where : condition}, limit, offset)
      return res.status(200).json({ status: 200, data: comments, message: "Succesfully comments Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// Find a single comment with an id
exports.getOneCommentById = async function (req, res, next) {
  // We validate request parameters
  const id = req.query.id;
  try {
    var comment = await Commentservices.findOneComment(id)
    return res.status(200).json({ status: 200, data: comment, message: "Succesfully comment Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}

// We get all comment by user id
exports.getAllCommentByUserId = async function (req, res) {
  const { page, size, userId} = req.query;
  const condition = userId ? { userId: userId } : null;
  // We set the pagination
  const { limit, offset } = getPagination(page, size);
  try {
    var comments = await Commentservices.getAllCommentByUserId(condition, limit, offset)
    return res.status(200).json({ status: 200, data: comments, message: "Succesfully comments By User Id Retrieved" });
  } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
  }
};

/*
  PUT CONTROLLER
*/
// Modify one comment from the database
exports.updateOneComment = async function (req, res, next) {
  // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  // Create objet
  const { commentId } = req.query;
  const condition =  commentId ? { id: commentId } : null;
  var comment = {
    comment: req.body.comment ? req.body.comment : null,
    userId: req.body.userId ? req.body.userId : null,
    clipId: req.body.clipId ? req.body.clipId : null,
  };
  try {
      var comments = await Commentservices.update(condition, comment)
      return res.status(200).json({ status: 200, data: comments, message: "Succesfully comment Modified" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

/*
  POST CONTROLLER
*/
// Add one comments to the database
exports.addOneComment = async function (req, res, next) {
  
  // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  // Create object
  var comment = {
    comment: req.body.comment ? req.body.comment : null,
    userId: req.body.userId ? req.body.userId : null,
    clipId: req.body.clipId ? req.body.clipId : null
  };
  // Call service
  try {
      var comments = await Commentservices.add(comment)
      return res.status(200).json({ status: 200, data: comments, message: "Succesfully comments Added" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

/*
  DELETE CONTROLLER
*/
// Delete one comment from the database
exports.deleteOneComment = async function (req, res, next) {
  // We validate request parameters
  const {id} = req.query;
  try {
      var comments = await Commentservices.delOne(id)
      return res.status(200).json({ status: 200, data: comments, message: "Succesfully Comments Deleted" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// Delete all comments the database
exports.deleteAllComment = async function (req, res, next) {
  try {
      var comments = await Commentservices.delAll()
      return res.status(200).json({ status: 200, data: comments, message: "Succesfully All Comments Deleted" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};
