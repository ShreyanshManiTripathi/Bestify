module.exports = (sequelize, Sequelize) => {
  const Quiz = sequelize.define("quizzes", {
    quizId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
    },
    quizName: {
      type: Sequelize.STRING,
    },
    quizTimer: {
      type: Sequelize.INTEGER,
    },
    noOfQuestions: {
      type: Sequelize.INTEGER,
    },
    quizScore: {
      type: Sequelize.INTEGER,
    },
  });

  return Quiz;
};
