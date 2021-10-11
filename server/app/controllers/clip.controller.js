const db = require("../../models");
const Op = db.Sequelize.Op;
const Clipservices = require("../services/clip.service");

// Manage Pagination Controller
const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? +page : 0;

  return { limit, offset };
};

/*
  GET CONTROLLER
*/
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

// Find a single Clip with an id
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
  const condition = published ? { published: { [Op.eq]: published} } : {  published: 1 }

  // We set the pagination
  const { limit, offset } = getPagination(page, size);
  try {
      var clips = await Clipservices.findAllPublishedClips(condition, limit, offset)
      return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips Published Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// We get all clip by user id
exports.getAllClipByUserId = async function (req, res) {
  const { page, size, userId} = req.query;
  const condition = userId ? { userId: userId } : null;
  // We set the pagination
  const { limit, offset } = getPagination(page, size);
  try {
    var clips = await Clipservices.getAllClipByUserId(condition, limit, offset)
    return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips By User Id Retrieved" });
  } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
  }
};

// We get all published clip by user id
exports.getAllPublishedClipByUserId = async function (req, res) {
  const { page, size, userid, published} = req.query;
  const UserCondition = userid ? { id: userid } : null;
  const ClipCondition = published ? { published: { [Op.eq]: published} } : {  published: 1 };

  // We set the pagination
  const { limit, offset } = getPagination(page, size);
  try {
    var clips = await Clipservices.getAllPublishedClipByUserId(ClipCondition, UserCondition, limit, offset)
    return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips Published By User Id Retrieved" });
  } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
  }
};
/*
  PUT CONTROLLER
*/
// Modify one clip from the database
exports.updateOneClip = async function (req, res, next) {
  // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  // Create objet
  const { clipId } = req.query;
  const condition =  clipId ? { id: clipId } : null;
  var clip = {
    published: req.body.published ? req.body.published : false,
    provider: req.body.provider ? req.body.provider : null,
    id_twitch: req.body.id_twitch ? req.body.id_twitch : null,
    url: req.body.url ? req.body.url : null,
    embed_url: req.body.embed_url ? req.body.embed_url : null,
    broadcaster_id: req.body.broadcaster_id ? req.body.broadcaster_id : null,
    broadcaster_name: req.body.broadcaster_name ? req.body.broadcaster_name : null,
    creator_id: req.body.creator_id ? req.body.creator_id : null,
    creator_name: req.body.creator_name ? req.body.creator_name : null,
    video_id: req.body.video_id ? req.body.video_id : null,
    game_id: req.body.game_id ? req.body.game_id : null,
    language: req.body.language ? req.body.language : null,
    title: req.body.title ? req.body.title : null,
    view_count: req.body.view_count ? req.body.view_count : null,
    created_at_on_twitch: req.body.created_at_on_twitch ? req.body.created_at_on_twitch : null,
    thumbnail_url: req.body.thumbnail_url ? req.body.thumbnail_url : null,
    tags: req.body.tags ? req.body.tags : null,
    userId: req.body.userId ? req.body.userId : null
  };
  try {
      var clips = await Clipservices.update(condition, clip)
      return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clip Modified" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

/*
  POST CONTROLLER
*/
// Add one clips to the database
exports.addOneClip = async function (req, res, next) {
  
  // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  // Create object
  var clip = {
    published: req.body.published ? req.body.published : false,
    provider: req.body.provider ? req.body.provider : null,
    id_twitch: req.body.id_twitch ? req.body.id_twitch : null,
    url: req.body.url ? req.body.url : null,
    embed_url: req.body.embed_url ? req.body.embed_url : null,
    broadcaster_id: req.body.broadcaster_id ? req.body.broadcaster_id : null,
    broadcaster_name: req.body.broadcaster_name ? req.body.broadcaster_name : null,
    creator_id: req.body.creator_id ? req.body.creator_id : null,
    creator_name: req.body.creator_name ? req.body.creator_name : null,
    video_id: req.body.video_id ? req.body.video_id : null,
    game_id: req.body.game_id ? req.body.game_id : null,
    language: req.body.language ? req.body.language : null,
    title: req.body.title ? req.body.title : null,
    view_count: req.body.view_count ? req.body.view_count : null,
    created_at_on_twitch: req.body.created_at_on_twitch ? req.body.created_at_on_twitch : null,
    thumbnail_url: req.body.thumbnail_url ? req.body.thumbnail_url : null,
    tags: req.body.tags ? req.body.tags : null,
    userId: req.body.userId ? req.body.userId : null,
  };
  // Call service
  try {
      var clips = await Clipservices.add(clip)
      return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips Added" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

/*
  DELETE CONTROLLER
*/
// Delete one clip from the database
exports.deleteOneClip = async function (req, res, next) {
  // We validate request parameters
  const {id} = req.query;
  try {
      var clips = await Clipservices.delOne(id)
      return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips Published Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

// Delete all clips the database
exports.deleteAllClip = async function (req, res, next) {
  try {
      var clips = await Clipservices.delAll()
      return res.status(200).json({ status: 200, data: clips, message: "Succesfully Clips Published Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};
