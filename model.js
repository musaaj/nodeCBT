var {Sequelize, DataTypes } = require("sequelize");

var sql = new Sequelize('tcexam', 'admin', 'admin', {
	host: '127.0.0.1',
	dialect: 'mariadb'
});

const Group = sql.define('Group',{
	name: {
		type: DataTypes.STRING,
		unique: true
	}
},{});

const User = sql.define('User',{
	firstName: DataTypes.STRING,
	lastName: DataTypes.STRING,
	middleName: {
		type: DataTypes.STRING,
		default: ''
	},
	regNo: {
		type: DataTypes.STRING,
		unique: true
	},
	username: {
		type: DataTypes.STRING,
		unique: true
	},
	password: DataTypes.STRING
},{})

const Module = sql.define('Module',{
	name: {
		type: DataTypes.STRING,
		unique: true
	}
},{});

const Question = sql.define('Question',{
	text: {
		type: DataTypes.STRING,
		unique: true
	},
	explanation: DataTypes.STRING,
	type: {
		type: DataTypes.INTEGER,
		defaultValue: 1
	}
},{})

const Answer = sql.define('Answer',{
	text: {
		type: DataTypes.STRING,
		unique: true
	},
	explanation: DataTypes.STRING,
	isRight: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
},{})

//Group.User = Group.belongsTo(User);
Group.hasMany(User, {as: 'users'});

//Answer.Question = Answer.belongsTo(Question);
Question.hasMany(Answer, {as: 'answers'});

//Question.Module = Question.belongsTo(Module);
Module.hasMany(Question, {as: 'questions'});



async function test(){
try {
	await sql.sync({force: true});
	await Group.create({
		name: 'admin',
		users: [{
			firstName: 'Super',
			lastName: 'Admin',
			username: 'admin',
			password: 'admin123',
			regNo: '00FA874BA3'
		}]
	},{
		include: [{
			association: User,
			as: 'users'
		}]
	})

  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}};

test()
