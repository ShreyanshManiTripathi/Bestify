module.exports = (sequelize, Sequelize) => {
    const Favorite = sequelize.define("userFavQuizzes", {
      favQuizId:{
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
      },
      isFav: {
        type: Sequelize.BOOLEAN,
      },
    });
  
    return Favorite;
  };
  