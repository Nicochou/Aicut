var ContentService = require('../services/content.service')    

exports.allAccess = async function (req, res, next) {
  try {
    var PublicContent = await ContentService.getPublicContent()
    return res.status(200).json({ status: 200, data: PublicContent, message: "Succesfully Public Content Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.userBoard = async function (req, res, next){
  try {
    var UserContent = await ContentService.getUserContent()
    return res.status(200).json({ status: 200, data: UserContent, message: "Succesfully User Content Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.adminBoard = async function (req, res, next) {
  try {
    var AdminContent = await ContentService.getAdminContent()
    return res.status(200).json({ status: 200, data: UserContent, message: "Succesfully Admin Content Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.moderatorBoard = async function (req, res, next) {
  try {
    var ModeratorContent = await ContentService.getModeratorContent()
    return res.status(200).json({ status: 200, data: ModeratorContent, message: "Succesfully Moderator Content Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.streamerBoard = async function (req, res, next) {
  try {
    var StreamerContent = await ContentService.getStreamerContent()
    return res.status(200).json({ status: 200, data: StreamerContent, message: "Succesfully Streamer Content Retrieved" });
  } catch (e) {
      return res.status(400).json({ status: 400, message: e.message });
  }
};