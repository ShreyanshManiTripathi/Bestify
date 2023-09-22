const dbConfig = require("../config/db.config");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model")(sequelize, Sequelize);
db.categories = require("./category.model")(sequelize, Sequelize);
db.quizzes = require("./quiz.model")(sequelize, Sequelize);
db.questions = require("./question.model")(sequelize, Sequelize);
db.games = require("./game_zone.model")(sequelize, Sequelize);
db.user_fav_quizzes = require("./user_favorite_quiz.model")(
  sequelize,
  Sequelize
);
db.user_quiz_trans = require("./user_quiz_transaction.model")(
  sequelize,
  Sequelize
);
db.user_game_trans = require("./user_game_transaction.model")(
  sequelize,
  Sequelize
);

// catgory -> quiz
//category to quiz association one to many
db.categories.hasMany(db.quizzes, {
  foreignKey: "categoryId",
});

db.quizzes.belongsTo(db.categories, {
  foreignKey: "categoryId",
});

// quiz -> quesitons
//quizzes to questions association one to many
db.quizzes.hasMany(db.questions, {
  foreignKey: "quizId",
});
db.questions.belongsTo(db.quizzes, {
  foreignKey: "quizId",
});

// user_fav -> users and quizzes
// user_fav_quizzes to users association one to many
db.users.hasMany(db.user_fav_quizzes, {
  foreignKey: "userId",
});
db.user_fav_quizzes.belongsTo(db.users, {
  foreignKey: "userId",
});

// user_fav_quizzes to quizzes association one to many
db.quizzes.hasMany(db.user_fav_quizzes, {
  foreignKey: "quizId",
});
db.user_fav_quizzes.belongsTo(db.quizzes, {
  foreignKey: "quizId",
});

// user_quiz_tran - > users , quizzes
// user_quiz_trans to users association one to many
db.users.hasMany(db.user_quiz_trans, {
  foreignKey: "userId",
});
db.user_quiz_trans.belongsTo(db.users, {
  foreignKey: "userId",
});

// user_quiz_trans to quizzes association one to many
db.quizzes.hasMany(db.user_quiz_trans, {
  foreignKey: "quizId",
});
db.user_quiz_trans.belongsTo(db.quizzes, {
  foreignKey: "quizId",
});

// user_game_tran - > users , games

// user_game_trans to users association one to many
db.users.hasMany(db.user_game_trans, {
  foreignKey: "userId",
});
db.user_game_trans.belongsTo(db.users, {
  foreignKey: "userId",
});

// user_game_trans to games association one to many
db.games.hasMany(db.user_game_trans, {
  foreignKey: "gameId",
});
db.user_game_trans.belongsTo(db.games, {
  foreignKey: "gameId",
});

module.exports = db;
