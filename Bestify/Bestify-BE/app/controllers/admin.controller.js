const db = require("../models");
const { Op } = require("sequelize");

const adminObj = {
  users: db.users,
  categories: db.categories,
  quizzes: db.quizzes,
  questions: db.questions,
  games: db.games,
  userQuizTran: db.user_quiz_trans,
  userFavQuiz: db.user_fav_quizzes,
  userGameTran: db.user_game_trans,
};

//-------------ADMIN USER SECTION-------------//

//demo api to check logical part
exports.creates = (req, res) => {
  if (!req.body.username) {
    res.status(400),
      res.send({
        message: "content cannot be empty",
      });
  }

  const users = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    isAdmin: req.body.isAdmin,
  };

  adminObj.users
    .create(users)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "some error occured",
      });
    });
};

//get all users
exports.getAllUser = (req, res) => {
  adminObj.users
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("error occured");
    });
};

//-------------CATEGORY SECTION-------------//

//create category
exports.createCategory = (req, res) => {
  if (!req.body.categoryName) {
    res.status(400).send({
      message: "content can not be empty",
    });
    return;
  }

  const category = {
    categoryName: req.body.categoryName,
  };

  adminObj.categories
    .create(category)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating a tutorials",
      });
    });
};

//get categories
exports.getCategories = (req, res) => {
  adminObj.categories
    .findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "some error occured",
      });
    });
};

//get category by Id
exports.getCategoryById = (req, res) => {
  const categoryId = req.params.Id;

  adminObj.categories
    .findAll({ where: { categoryId: categoryId } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "some error occured",
      });
    });
};

//-------------QUIZ SECTION-------------//

//create quiz

exports.createQuiz = (req, res) => {
  const quizz = {
    quizName: req.body.quizName,
    quizTimer: req.body.quizTimer,
    noOfQuestions: req.body.noOfQuestions,
    quizScore: req.body.quizScore,
    categoryId: req.body.categoryId,
  };

  adminObj.quizzes
    .create(quizz)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating a tutorials",
      });
    });
};

//get all  quiz
exports.getQuiz = (req, res) => {
  adminObj.quizzes
    .findAll()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "some error occured",
      });
    });
};


//get all quiz by category
exports.getAllQuizByCategoryId = (req, res) => {
  const categoryId = req.params.categoryId;

  adminObj.quizzes
    .findAll({ where: { categoryId: categoryId } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "some error occured",
      });
    });
};

//-------------QUESTION SECTION-------------//

//create questions

// exports.createQuestion = (req, res) => {
//   const question = {
//     quesStmt: req.body.quesStmt,
//     optionA: req.body.optionA,
//     optionB: req.body.optionB,
//     optionC: req.body.optionC,
//     optionD: req.body.optionD,
//     correctAnswer: req.body.correctAnswer,
//     quizId: req.body.quizId,
//   };

//   adminObj.questions
//     .create(question)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occured while creating a tutorials",
//       });
//     });
// };

//add questions in bulk

exports.createQuestion = (req, res) => {
  const question = req.body;

  adminObj.questions
    .bulkCreate(question, { returning: true })
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.status(500).send({
        message: err.message || "Some error occured while creating a tutorials",
      });
    });
};

//get all question by  quiz id
exports.getAllQuestionByQuizId = (req, res) => {
  const quizId = req.params.quizId;

  adminObj.questions
    .findAll({ where: { quizId: quizId } })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: "some error occured",
      });
    });
};

//-------------User Quiz Transaction SECTION-------------//

// create quiz transaction
exports.createQuizTransaction = (req, res) => {
  if (!req.body.quizId) {
    res.status(400).send({
      message: "content can not be empty",
    });
    return;
  }

  var isCompleted = req.body.isCompleted;
  var timeLeft = 0;
  var noOfQuesAttempted = 100;
  if (!isCompleted) {
    timeLeft = req.body.timeLeft;
    noOfQuesAttempted = req.body.noOfQuesAttempted;
  }
  var isPlayedOn = new Date();

  const transaction = {
    userScore: req.body.userScore,
    userId: req.body.userId,
    quizId: req.body.quizId,
    noOfQuesAttempted: noOfQuesAttempted,
    timeLeft: timeLeft,
    isPlayedOn: isPlayedOn,
    isCompleted: isCompleted,
  };

  adminObj.userQuizTran
    .create(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a Transaction",
      });
    });
};

//get all quiz transactions
exports.getQuizTransactions = (req, res) => {
  const categoryId = req.params.categoryId;

  adminObj.quizzes
    .findAll({
      // include: [adminObj.users, adminObj.quizzes]
      where: {
        categoryId: categoryId,
      },
      include: [
        {
          model: adminObj.userQuizTran,
          where: {
            // userId: user_id,
          },
          include: [db.quizzes, db.users],
        },
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving transactions.",
      });
    });
};

//get transactions by quizid

exports.getTransactionsByQuizId = (req, res) => {
  const quizId = req.params.quizId;

  adminObj.quizzes
    .findOne({
      where: {
        quizId: quizId,
      },
      include: [
        {
          model: adminObj.userQuizTran,
          where: {
            // userId: user_id,
          },
          include: [db.quizzes, db.users],
        },
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving transactions.",
      });
    });
};

// get all quiz transactions by userid
exports.findTransactionsByUserId = (req, res) => {
  const user_id = req.params.userid;

  adminObj.userQuizTran
    .findAll({ where: { userId: user_id }, include: [adminObj.quizzes] })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Transaction with id=" + id,
      });
    });
  3;
};

//-------------User Game Transaction SECTION-------------//

//create game transaction
exports.createGameTransaction = (req, res) => {
  if (!req.body.gameId) {
    res.status(400).send({
      message: "content can not be empty",
    });
    return;
  }

  var isPlayedOn = new Date();

  const transaction = {
    userScore: req.body.userScore,
    userId: req.body.userId,
    gameId: req.body.gameId,
    status: req.body.status,
    isPlayedOn: isPlayedOn,
  };

  adminObj.userGameTran
    .create(transaction)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating a tutorials",
      });
    });
};

//get all game transactions
exports.getGameTransactions = (req, res) => {
  adminObj.games
    .findAll({
      include: [
        {
          model: adminObj.userGameTran,
          where: {
            // userId: user_id,
          },
          include: [db.games, db.users],
        },
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving transactions.",
      });
    });
};

//get transactions by gameid

exports.getTransactionsByGameId = (req, res) => {
  const gameId = req.params.gameId;

  adminObj.games
    .findOne({
      where: {
        gameId: gameId,
      },
      include: [
        {
          model: adminObj.userGameTran,
          where: {
            // userId: user_id,
          },
          include: [db.games, db.users],
        },
      ],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving transactions.",
      });
    });
};
