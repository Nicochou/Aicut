const db = require("../../models");
const User = db.user;
const Clip = db.clip;
const Comment = db.comment;

// Manage Pagination Service
const getPagingData = (data, offset, limit) => {
    const { count: totalItems, rows: comments } = data;
    const currentPage = offset ? +offset : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, comments, totalPages, currentPage };
  };

/*
  GET SERVICE
*/
// service : get all comments
exports.findAllComments = async function (query, limit, offset) {
    try {
        var comments = await Comment.findAndCountAll({
            query, 
            limit, 
            offset 
        })
        response = getPagingData(comments, offset, limit);
        return response;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating comments :' + e)
    }
};

// service : get one comment by id
exports.findOneComment = async function (id) {
    try {
        var comment = await Comment.findByPk(id)
        return comment;
    } catch (e) {
        // Log Errors
        throw Error('Error while retriving the comment' + e)
    }
};

// service : get all comments by user id
exports.getAllCommentByUserId = async function (query, limit, offset) {
  try {
    var comments = await Comment.findAndCountAll({ 
      include: [
        {
          model: User,
          as: 'users',
          attributes: []
        },
        {
          model: Clip,
          as:'clips'
        }
      ],
       where: query,
       limit,
       offset
    })
    response = getPagingData(comments, offset, limit);
    return response;

  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the comment from user' + e)
  }
};
/*
  PUT SERVICE
*/
// service : update one comment by id
exports.update = async function (condition, comment) {
  try {
      var comment = await Comment.update(comment, {where: condition})
      return comment;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the comment' + e)
  }
};

/*
  POST SERVICE
*/
// service : add one comment
 exports.add = async function (comment) {
  try {
    var comment = await Comment.create(comment)
    return comment;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the comment' + e)
  }
};

/*
  DELETE SERVICE
*/
// service : delete one comment
exports.delOne = async function (id, truncate) {
  try {
    var comment = await Comment.destroy({where:{id}})
    return comment;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the comment' + e)
  }
};

// service : delete all comments by user id
exports.delAll = async function () {
  try {
    var comment = await Comment.destroy({ truncate: { cascade: true } })
    return comment;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the comment' + e)
  }
};