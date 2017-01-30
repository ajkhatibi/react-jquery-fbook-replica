module.exports = function(sequelize, DataTypes){
	var users = sequelize.define('users', {
		name: DataTypes.STRING,
		userName: DataTypes.STRING,
		password: DataTypes.STRING,
		email: DataTypes.STRING,
		description: DataTypes.STRING
	});
	return users;
}