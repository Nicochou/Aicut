const db = require("../../models");
const Clip = db.clip;

exports.getPublicContent = async function (query) {

    try {
        var publicContent = await Clip.findAll()
        return publicContent;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.getUserContent = async function (query) {

    try {
        var UserContent = "user content"
        return UserContent;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Users')
    }
}

exports.getModeratorContent = async function (query) {

    try {
        var ModeratorContent = "moderator content"
        return ModeratorContent;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Moderator')
    }
}

exports.getAdminContent = async function (query) {

    try {
        var AdminContent = "admin content"
        return AdminContent;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Admin')
    }
}

exports.getStreamerContent = async function (query) {

    try {
        var streamerContent = "streamer content"
        return streamerContent;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating Streamer')
    }
}