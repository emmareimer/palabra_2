const path = require('path'); 
const express = require('express');
const session = require('express-session');
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const { engine } = require('express-handlebars');

// import sequelize connection

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SECRET || 'secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------- path to connect css, client side js to handlebars --------------------
app.use(express.static(path.join(__dirname, '/public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
