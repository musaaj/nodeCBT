var {Sequelize, DataTypes } = require("sequelize");

var sql = new Sequelize('cbtexam', 'admin', 'admin', {
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

const Topic = sql.define('Topic', {
	name: {
		type: DataTypes.STRING,
		unique: true
	}
},{})

const Question = sql.define('Question',{
	text: {
		type: DataTypes.STRING,
		unique: true
	},
	explanation: {
		type: DataTypes.STRING,
		defaultValue: ''
	},
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
	explanation: {
		type: DataTypes.STRING,
		defaultValue: ''
	},
	isRight: {
		type: DataTypes.BOOLEAN,
		defaultValue: false
	}
},{});

const Quiz = sql.define('Quiz', {
	name: {
		type: DataTypes.STRING,
		unique: true
	},
	topics: {
		type: DataTypes.TEXT,
		get() {
			const topics = this.getDataValue('topics');
			return topics? JSON.parse(topics): [];
		},
		set (value) {
			value? this.setDataValue('topics', JSON.stringify(value)): '';
		}
	},
	numOfQuestions: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	duration: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	startingTime: {
		type: DataTypes.DATE,
		allowNull: false
	},
	endingTime: {
		type: DataTypes.DATE,
		allowNull: false
	}
},{})

const QuizLog = sql.define('QuizLog', {
},{})

Quiz.belongsTo(Group)
Group.hasMany(Quiz)

QuizLog.belongsTo(Quiz)
Quiz.hasMany(QuizLog);

QuizLog.belongsTo(Answer)
Answer.hasMany(QuizLog)

QuizLog.belongsTo(Question)
Question.hasMany(QuizLog)

QuizLog.belongsTo(User)
User.hasMany(QuizLog)

User.belongsTo(Group);
Group.hasMany(User, {as: 'users'});

Topic.belongsTo(Module);
Module.hasMany(Topic, {as: 'topics'});

Question.belongsTo(Topic);
Topic.hasMany(Question, {as: 'questions'});

Answer.belongsTo(Question);
Question.hasMany(Answer, {as: 'answers'});

module.exports = {sql, Group, User, Module, Topic, Question, Answer, Quiz, QuizLog};