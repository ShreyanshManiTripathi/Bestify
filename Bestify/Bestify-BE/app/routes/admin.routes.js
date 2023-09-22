module.exports = (app) => {
  const admin = require("../controllers/admin.controller");

  var router = require("express").Router();

  //-------------ADMIN USER SECTION-------------//

  //demo create
  router.post("/", admin.creates);

  router.get("/", admin.getAllUser);

  //-------------CATEGORY SECTION-------------//

  //create category
  router.post("/category", admin.createCategory);

  //get categories
  router.get("/category", admin.getCategories);

  //get category by id
  router.get("/category/:Id", admin.getCategoryById);

  //---------------QUIZ SECTION-------------//

  //create quiz using category id
  router.post("/quiz", admin.createQuiz);

  //get quiz
  router.get("/quiz/all", admin.getQuiz);

  //get all quiz by category id
  router.get("/quiz/:categoryId", admin.getAllQuizByCategoryId);

  //---------------QUESTION SECTION-------------//

  //create question using quiz id
  router.post("/question", admin.createQuestion);

  //get all quiz by category id
  router.get("/question/:quizId", admin.getAllQuestionByQuizId);

  //---------------User Quiz Transaction SECTION-------------//
  router.post("/quiztransactions", admin.createQuizTransaction);

  router.get("/quiztransactions/:categoryId", admin.getQuizTransactions);

  router.get("/quiztransactions/:userid", admin.findTransactionsByUserId);

  router.get("/quiztransactions/quiz/:quizId", admin.getTransactionsByQuizId);

  //---------------User Game Transaction SECTION-------------//

  router.post("/gametransactions", admin.createGameTransaction);

  router.get("/gametransactions", admin.getGameTransactions);

  router.get("/gametransactions/game/:gameId", admin.getTransactionsByGameId);

  app.use("/admin", router);
};
