module.exports = (sequelize, Sequelize) => {
  const UserGameTranscation = sequelize.define("usergametransactions", {
    userGameTranId: {
      type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
    },
    userScore: {
      type: Sequelize.INTEGER,
    },
    status: {
      type: Sequelize.BOOLEAN,
    },
    isPlayedOn: {
      type: Sequelize.DATE,
    },
  });

  return UserGameTranscation;
};
