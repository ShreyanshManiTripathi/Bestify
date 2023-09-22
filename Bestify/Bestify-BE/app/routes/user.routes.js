module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  const router = require("express").Router();

  //-------------CATEGORY SECTION-------------//

  //get categories
  router.get("/category", users.getCategories);

  //get category by id
  router.get("/category/:Id", users.getCategoryById);

  //---------------QUIZ SECTION-------------//

  //get quiz
  router.get("/quiz/all", users.getQuiz);

  //get all quiz by category id
  router.get("/quiz/:categoryId", users.getAllQuizByCategoryId);

  //---------------QUESTION SECTION-------------//

  //get all quiz by category id
  router.get("/question/:quizId", users.getAllQuestionByQuizId);

  // //get all quiz by category id
  // router.get("/question/:quizId", users.getCorrectAwnserByQuizId);

  //create new user
  router.post("/", users.create);
  //retrive all users
  router.post("/verify", users.verifyUser);

  router.get("/gam", users.findGameAll);

  router.get("/gam1", users.findGameAll1);

  router.get("/gam2", users.findGameAll2);

  //retrive single user with id
  router.get("/:id", users.findOne);

  router.delete("/", users.deleteAll);

  router.post("/sendMail", users.sendMail);

  router.post("/sendGame", users.createGames);

  router.post("/sendTrans", users.createGameTransaction);

  //show quiz prev highscore on quiz id
  router.get("/viewquizprescore/:userId", users.viewQuizPrevScore);

  //show game prev score on game id
  router.get("/viewgameprescore/:userId", users.viewGamePrevScore);

  //-------------CATEGORY SECTION-------------//

  //get categories
  router.get("/category", users.getCategories);

  //get category by id
  router.get("/category/:Id", users.getCategoryById);

  //---------------QUIZ SECTION-------------//

  //get quiz
  router.get("/quiz/all", users.getQuiz);

  //get all quiz by category id
  router.get("/quiz/:categoryId", users.getAllQuizByCategoryId);

  //get quiz by name
  // router.get("/quiz/:quizName", user.getQuizByName);

  //---------------QUESTION SECTION-------------//

  //create question using quiz id
  // router.post("/question", users.createQuestion);

  //get all quiz by category id
  router.get("/question/:quizId", users.getAllQuestionByQuizId);

  // add quiz to favorite;
  router.post("/addtofav/", users.addToFavorites);

  // delete favorite quiz
  router.delete("/removefromfav/:quizid", users.removeFromFavorites);

  // get favorite quizzes
  router.get("/favorites/:userid", users.getFavoritesByUserId);

  //add user score
  router.post("/userscore", users.createUserTransaction);

  app.use("/users", router);
};
