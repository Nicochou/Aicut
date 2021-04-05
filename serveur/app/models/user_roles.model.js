module.exports = (sequelize, Sequelize) =>{
	const UserRoles = sequelize.define("user_roles",{
		roleId: {
			type: Sequelize.INTEGER,
			primaryKey: true
		},
		userId:{
			type: Sequelize.STRING
		}
	});
	return UserRoles;
}
