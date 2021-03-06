const path = require("path");
const express = require("express");
const session = require("express-session");
const routes = require("./controllers/index");
const sequelize = require("./config/connection");
const { engine } = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const HOST = "0.0.0.0";
const sess = {
  secret: process.env.SECRET || "secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");
app.use(express.static("views"));

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "/public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, HOST, () => console.log("Now listening"));
});
