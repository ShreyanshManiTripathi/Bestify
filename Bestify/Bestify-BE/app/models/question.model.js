module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("questions", {
      quesId:{
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV1
      },
      quesStmt: {
        type: Sequelize.STRING,
      },
      optionA: {
        type: Sequelize.STRING,
      },
      optionB: {
        type: Sequelize.STRING,
      },
      optionC: {
        type: Sequelize.STRING,
      },
      optionD: {
        type: Sequelize.STRING,
      },
      correctAnswer: {
        type: Sequelize.STRING,
      },
      
    });
  
    return Question;
  };
  