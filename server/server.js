const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const oauth = require("./routes/oauth");
const passport = require("passport");
const cookieSession = require("cookie-session");
const credentials = require("./credentials.json");

// Mongoose
const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect(credentials.mongoURL, { useNewUrlParser: true });

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: [credentials.cookieSessionKey]
}))
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.get("/api/login", oauth.login);
app.get("/api/oauth2callback", oauth.callback, (req, res) => {
    res.json(req.user);
});

// Just a temporary test
app.get("/api/protected", oauth.isLoggedIn, (req, res) => {
    res.json({
        message: 'You have accessed the protected endpoint!',
        yourUserInfo: req.user,
    });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});