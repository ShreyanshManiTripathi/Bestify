module.exports = (sequelize, Sequelize) => {
  const Game = sequelize.define("games", {
    gameId: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV1,
    },
    gameName: {
      type: Sequelize.STRING,
    },
    gameTime: {
      type: Sequelize.INTEGER,
    },
  });

  return Game;
};
