const db = require("../../models");
const User = db.user;
const Clip = db.clip;
const Comment = db.comment;

// Manage Pagination Service
const getPagingData = (data, offset, limit) => {
    const { count: totalItems, rows: clips } = data;
    const currentPage = offset ? +offset : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, clips, totalPages, currentPage };
  };

/*
  GET SERVICE
*/
// service : get all clips
exports.findAllClips = async function (query, limit, offset) {
    try {
        var clips = await Clip.findAndCountAll({
            query, 
            limit, 
            offset 
        })
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
        throw Error('Error while retriving the clip' + e)
    }
};

// service : get all published clips
exports.findAllPublishedClips = async function (query, limit, offset) {
    try {
        var clips = await Clip.findAndCountAll({
            where: query,
            limit,
            offset
        })
        response = getPagingData(clips, offset, limit);
        return response;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Published Clips :' + e)
    }
};

// service : get all clips by user id
exports.getAllClipByUserId = async function (query, limit, offset) {
  try {
    var clips = await Clip.findAndCountAll({ 
      include: [
        {
          model: User,
          as: 'users',
          attributes: []
        },
        {
          model: Comment,
          as:'comments'
        }
      ],
       where: query,
       limit,
       offset
    })
    response = getPagingData(clips, offset, limit);
    return response;

  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the clip from user' + e)
  }
};

// service : get all clips by user id
exports.getAllPublishedClipByUserId = async function (queryClip, queryUser, limit, offset) {
  try {
    var clips = await Clip.findAndCountAll({ 
      include: [
        {
          model: User,
          as: 'users',
          attributes: [],
          where: queryUser,
        },
        {
          model: Comment,
          as:'comments'
        }
      ],
       where: queryClip,
       limit,
       offset
    })
    response = getPagingData(clips, offset, limit);
    return response;

  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the clip from user' + e)
  }
};

/*
  PUT SERVICE
*/
// service : update one clip by id
exports.update = async function (condition, clip) {
  try {
      var clip = await Clip.update(clip, {where: condition})
      return clip;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the clip' + e)
  }
};

/*
  POST SERVICE
*/
// service : add one clip
 exports.add = async function (clip) {
  try {
    var clip = await Clip.create(clip)
    return clip;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the clip' + e)
  }
};

/*
  DELETE SERVICE
*/
// service : delete one clip
exports.delOne = async function (id, truncate) {
  try {
    var clip = await Clip.destroy({where:{id}})
    return clip;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the clip' + e)
  }
};

// service : delete all clips by user id
exports.delAll = async function () {
  try {
    var clip = await Clip.destroy({ truncate: { cascade: true } })
    return clip;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the clip' + e)
  }
};