const db = require("../../models");
const User = db.user;
const Clip = db.clip;
const Comment = db.comment;

// Manage Pagination Service
const getPagingData = (data, offset, limit) => {
    const { count: totalItems, rows: users } = data;
    const currentPage = offset ? +offset : 0;
    const totalPages = Math.ceil(totalItems / limit);

    return { totalItems, users, totalPages, currentPage };
  };

/*
  GET SERVICE
*/
// service : get all users
exports.findAllUsers = async function (query, limit, offset) {
    try {
        var users = await User.findAndCountAll({
            query, 
            limit, 
            offset 
        })
        response = getPagingData(users, offset, limit);
        return response;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating users :' + e)
    }
};

// service : get one user by id
exports.findOneUser = async function (id) {
    try {
        var user = await User.findByPk(id)
        return user;
    } catch (e) {
        // Log Errors
        throw Error('Error while retriving the user' + e)
    }
};
/*
  PUT SERVICE
*/
// service : update one user by id
exports.update = async function (condition, user) {
  try {
      var user = await User.update(user, {where: condition})
      return user;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the user' + e)
  }
};

/*
  DELETE SERVICE
*/
// service : delete one user
exports.delOne = async function (id, truncate) {
  try {
    var user = await User.destroy({where:{id}})
    return user;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the user' + e)
  }
};

// service : delete all users by user id
exports.delAll = async function () {
  try {
    var user = await User.destroy({ truncate: { cascade: true } })
    return user;
  } catch (e) {
      // Log Errors
      throw Error('Error while retriving the user' + e)
  }
};