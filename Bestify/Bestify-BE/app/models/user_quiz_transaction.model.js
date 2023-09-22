module.exports = (sequelize, Sequelize) => {
  const UserQuizTranscation = sequelize.define("userquiztransactions", {
    userQuizTranId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
    },
    userScore: {
      type: Sequelize.INTEGER,
    },
    noOfQuesAttempted: {
      type: Sequelize.INTEGER,
    },
    timeLeft: {
      type: Sequelize.INTEGER,
    },
    isCompleted: {
      type: Sequelize.BOOLEAN,
    },
    isPlayedOn: {
      type: Sequelize.DATE,
    },
  });

  return UserQuizTranscation;
};
