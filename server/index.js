const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User');
require('./services/passport');


mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


app.listen(PORT);

console.log(`Listening on ${PORT}`);

