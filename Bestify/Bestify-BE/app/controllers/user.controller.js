const db = require("../models");
var nodemailer = require("nodemailer");
const { Op } = require("sequelize");
const Cryptr = require("cryptr");
const { games } = require("../models");
const {quizzes} = require("../models"); //Added new line 
const cryptr = new Cryptr("BestifyYourTime");

const userObj = {
  users: db.users,
  categories: db.categories,
  quizzes: db.quizzes,
  questions: db.questions,
  games: db.games,
  userQuizTran: db.user_quiz_trans,
  userFavQuiz: db.user_fav_quizzes,
  userGameTran: db.user_game_trans,
};

//get all users
exports.getAllUser = (req, res) => {
  usernObj.users
    .findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send("error occured");
    });
};

//-------------CATEGORY SECTION-------------//

//get categories
exports.getCategories = (req, res) => {
  userObj.categories
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

  userObj.categories
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

//get all  quiz
exports.getQuiz = (req, res) => {
  userObj.quizzes
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

  userObj.quizzes
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

//get all question by  quiz id
exports.getAllQuestionByQuizId = (req, res) => {
  const quizId = req.params.quizId;

  userObj.questions
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
//get all correct awnser by  quiz id-soham
exports.createUserTransaction = (req, res) => {
  var isPlayedOn = new Date();

  // const transaction = {
  //   userScore: req.body.userScore,
  //   // status: req.body.status,
  //   isPlayedOn: isPlayedOn,
  //   userId: req.body.userId,
  //   quizId: req.body.gameId,
  // };
  const transaction = {
    userScore: req.body.userScore,
    noOfQuesAttempted: req.body.noOfQuesAttempted,
    timeLeft: req.body.timeLeft,
    isCompleted: req.body.isCompleted,
    isPlayedOn: isPlayedOn,
    userId: this.body.userId,
  };

  userObj.userQuizTran
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
/////////////////////////////soham-end

exports.getCorrectAwnserByQuizId = (req, res) => {
  const quesId = req.params.quizId;

  userObj.questions
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

//send score to data base

exports.create = (req, res) => {
  if (!req.body.username) {
    res.status(400).send({
      message: "Username cannot be empty!",
    });
    return;
  }

  const encryptedString = cryptr.encrypt(req.body.password);

  const user = {
    username: req.body.username,
    email: req.body.email,
    password: encryptedString,
    isAdmin: req.body.isAdmin,
  };

  userObj.users
    .create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error user not created",
      });
    });
};

exports.verifyUser = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  userObj.users
    .findAll({ where: { username: username } })
    .then((data) => {
      if (data.length > 0) {
        const decryptedpassword = cryptr.decrypt(data[0].password);
        if (decryptedpassword == password) {
          res.send({ verify: true, data: data[0] });
        } else {
          res.send({ verify: false });
        }
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error can't find data",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  userObj.users
    .findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retriving users with id=" + id,
      });
    });
};

exports.deleteAll = (req, res) => {
  userObj.users
    .destroy({
      where: {},
      truncate: false,
    })
    .then((nums) => {
      res.send({ message: `${nums} Users were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    });
};

//--------------EMAIL-------------------------------
exports.sendMail = (req, res) => {
  let userId = sessionStorage.getItem("userId"); //req.body.userId;
  var quizScore;
  let data = db.user_quiz_trans
    .findOne({
      where: { userId: userId },
      attributes: ["userScore"],
      raw: true,
    })
    .then((data) => {
      let score = JSON.parse(JSON.stringify(data));
      this.quizScore = score.userScore;
    });

  User.findByPk(userId)
    .then((data) => {
      let mymail = JSON.parse(JSON.stringify(data));
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "soham@gmail.com",
          pass: "soham123",
        },
      });
      var mailOptions = {
        from: "soham@gmail.com",
        to: mymail.email, //will come from database
        subject: "Quiz/Game score",
        text: `Your Score: ` + this.quizScore, //quiz score will come
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.send(error);
        } else {
          res.send("Email sent : " + info.response);
        }
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: "some error occured",
      });
    });
};

//--------------------------view quiz prev score--------------------------
exports.viewQuizPrevScore = (req, res) => {
  let userId = "189500c0-ac42-11ec-b636-338d427ec6e3";//req.params.userId; // "e2184900-d5a3-11eb-94f3-0d555e7960c8";
  userObj.userQuizTran
    .findAll({
      where: { userId: userId },
      include: [
        { model: userObj.users, attributes: ["username"] },
        { model: userObj.quizzes, attributes: ["quizName"] },
      ],
      attributes: ["userId", "userScore"],
      group: ["userScore"],
      order: [["userScore", "DESC"]],
      raw: true,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};
//-----------------------------game prev score---------------------------------
exports.viewGamePrevScore = (req, res) => {
  let userId = req.params.userId;
  userObj.userGameTran
    .findAll({
      where: { userId: userId },
      include: [
        { model: userObj.users, attributes: ["username"] },
        { model: userObj.games, attributes: ["gameName"] },
      ],
      attributes: ["userScore"],
      group: ["userScore"],
      order: [["userScore", "DESC"]],
      raw: true,
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving data.",
      });
    });
};

// add to favorites
exports.addToFavorites = (req, res) => {
  // const quizId = req.body.quizid;

  const favorite = {
    isFav: req.body.isFav,
    userId: req.body.userId,
    quizId: req.body.quizId,
  };

  userObj.userFavQuiz
    .create(favorite)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while creating a tutorials",
      });
    });
};

// delete from favorites

exports.removeFromFavorites = (req, res) => {
  const quizId = req.params.quizid;

  userObj.userFavQuiz
    .destroy({
      where: { quizId: quizId },
    })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "removed from favoritets successfully!",
        });
      } else {
        res.send({
          message: "Cannot remove from favorites",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete fav ",
      });
    });
};
// get favorites

exports.getFavoritesByUserId = (req, res) => {
  const userId = req.params.userid;
  userObj.userFavQuiz
    .findAll({
      where: {
        userId: userId,
      },
      include: [userObj.quizzes],
    })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving favorites.",
      });
    });
};

//=== game zone===============================//
exports.findGameAll = (req, res) => {
  userObj.games
    .findAll({ where: { gameName: "snake" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error can't find data",
      });
    });
};

exports.findGameAll1 = (req, res) => {
  userObj.games
    .findAll({ where: { gameName: "tic-tac-toe" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error can't find data",
      });
    });
};
exports.findGameAll2 = (req, res) => {
  userObj.games
    .findAll({ where: { gameName: "tetris" } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error can't find data",
      });
    });
};

exports.createGameTransaction = (req, res) => {
  var isPlayedOn = new Date();

  const transaction = {
    userScore: req.body.userScore,
    status: req.body.status,
    isPlayedOn: isPlayedOn,
    userId: req.body.userId,
    gameId: req.body.gameId,
  };

  userObj.userGameTran
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

exports.createGames = (req, res) => {
  if (!req.body.gameName) {
    res.status(400).send({
      message: "Username cannot be empty!",
    });
    return;
  }
  const user = {
    gameName: req.body.gameName,
    gameTime: req.body.gameTime,
  };
  userObj.games
    .create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error user not created",
      });
    });
};

/*Trial decrypt:
const cryptr1 = new Cryptr('myTotalySecretKey'); 
const encryptedString = cryptr1.encrypt('usercybage123');
const decryptedString = cryptr1.decrypt(encryptedString); 
console.log(encryptedString); 
console.log(decryptedString);*/
