module.exports = (sequelize, Sequelize) =>{
	const UserClips = sequelize.define("user_clips",{
		clipId: {
			type: Sequelize.INTEGER
		},
		userId:{
			type: Sequelize.STRING
		}
	});
	return UserClips;
}
