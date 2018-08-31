require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');


const passportSetup = require('./config/passport');
passportSetup(passport);

const app = express();

app.use(cors());

app.use(session({
  secret: 'angular auth passport secret shh',
  resave: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 }
}));

app.use(passport.initialize());
app.use(passport.session());


mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/jot', { useMongoClient: true })
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);


// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// default value for title local
app.locals.title = 'Jot - Express';



const index = require('./routes/index');
const authRoutes = require('./routes/auth-routes');
const entryApi = require('./routes/entry-api')
const userApi = require('./routes/user-api')
const emojiApi = require('./routes/emoji-api')
const followerApi = require('./routes/follower-api')
const engagementApi = require('./routes/engagement-api')

app.use('/', index);
app.use('/', authRoutes);
app.use('/api', entryApi)

app.use('/api', userApi)
app.use('/api', emojiApi)
app.use('/api', followerApi)
app.use('/api', engagementApi)


app.use((req, res, next) => {
  res.sendfile(__dirname + '/public/index.html');
});


module.exports = app;
