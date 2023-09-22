const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4200",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

db.sequelize.sync();

app.get("/", (req, res) => {
  res.json({
    message: "welcome to bestify",
  });
});

require("./app/routes/user.routes")(app);

require("./app/routes/admin.routes")(app);

const PORT = process.env.port || 8080;

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
