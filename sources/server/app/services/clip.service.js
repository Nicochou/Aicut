const db = require("../../models");
const User = db.user;
const Role = db.role;
const Clip = db.clip;
const UserClips = db.user_clips;

// Manage Pagination Service
const getPagingData = (data, offset, limit) => {
    const { count: totalItems, rows: clips } = data;
    const currentPage = offset ? +offset : 0;
    const totalPages = Math.ceil(totalItems / limit);
  
    return { totalItems, clips, totalPages, currentPage };
  };

// service : get all clips
exports.findAllClips = async function (query, limit, offset) {
    try {
        var clips = await Clip.findAndCountAll({
            query, 
            limit, 
            offset })
        response = getPagingData(clips, offset, limit);
        return response;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Clips :' + e)
    }
};

// service : get one clip by id
exports.findOneClip = async function (id) {
    try {
        var clip = await Clip.findByPk(id)
        return clip;
    } catch (e) {
        // Log Errors
        throw Error('Error while retriving the clip' + id)
    }
};

// service : get all published clips
exports.findAllPublishedClips = async function (query, limit, offset) {
    try {
        console.log(query);
        var clips = await Clip.findAndCountAll({
            query, 
            limit, 
            offset })
        response = getPagingData(clips, offset, limit);
        return response;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Published Clips :' + e)
    }
};

// service : update one clip by id
exports.update = async function (where, params) {
    try {
        var clip = await Clip.update(params, where)
        return clip;
    } catch (e) {
        // Log Errors
        throw Error('Error while retriving the clip' + id)
    }
};

// service : get edit clip by user id
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

// service : get clip by user id and status
 exports.getClipStatusByUserId = (req, res) => {
    let id = req.query.id;
    let status = req.query.status;
    User.findAll({ 
      include: [{
        model: Clip,
        required: false,
        where: {
          status: status
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

// We get edit clip by user id
 exports.addClip = (req, res) => {
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