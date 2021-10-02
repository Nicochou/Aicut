const db = require("../../models");
const User = db.user;
const Clip = db.clip;
const Clipservices = require("../services/clip.service");
const Op = db.Sequelize.Op;

// Manage Pagination Controller
const getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? +page : 0;

  return { limit, offset };
};

// Retrieve all clips from the database
exports.getAllClips = async function (req, res, next) {
  // We validate request parameters
  const { page, size , title} = req.query;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  // We set the pagination
  const { limit, offset } = getPagination(page, size);
  try {
      var clips = await Clipservices.findAllClips({where : condition}, limit, offset)
      return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// Find a single Tutorial with an id
exports.getOneClipById = async function (req, res, next) {
  // We validate request parameters
  const id = req.query.id;
  try {
    var clip = await Clipservices.findOneClip(id)
    return res.status(200).json({ status: 200, data: clip, message: "Succesfully Clip Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
}

// Retrieve all published clips from the database
exports.getAllPublishedClips = async function (req, res, next) {
  // We validate request parameters
  const { page, size, published } = req.query;
  var condition = published ? published : 1
  // We set the pagination
  const { limit, offset } = getPagination(page, size);
  try {
      var clips = await Clipservices.findAllPublishedClips({where : condition}, limit, offset)
      return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips Published Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// Retrieve all published clips from the database
exports.updateOneClip = async function (req, res, next) {
  // We validate request parameters
  const id = req.params.id;
  const body = req.body;
  var condition = `id:`+ id;
console.log(id,params,condition);
  try {
      var clips = await Clipservices.update({where : condition}, body)
      return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips Published Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};
// We get edit clip by user id
exports.getAllClipByUserId = (req, res) => {
  let id = req.query.id;
  User.findAll({ 
    include: [{
      model: Clip,
      required: false
     }],
     where: {
      id: id
    }
  })
  .then(function (clips) {
      res.send({clips});
    });
  };

// We get clip by user id and status
 exports.getClipStatusByUserId = (req, res) => {
    let id = req.query.id;
    User.findAll({ 
      include: [{
        model: Clip,
        required: false,
      }],
      where: {
        id: id
      }
    })
    .then(function (clips) {
        res.send({clips});
      });
  };

// We get edit clip by user id
 exports.postClip = (req, res) => {
  let id = req.query.id;
  User.findAll({ 
    include: [{
      model: Clip,
      required: false,
      where: {
        status_clip: '102'
      }
    }],
    where: {
      id: id
    }
  })
  .then(function (clips) {
      res.send({clips});
    });
};