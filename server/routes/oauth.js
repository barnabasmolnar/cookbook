const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const credentials = require("../credentials.json");
const User = require("../models/User")

passport.use(new GoogleStrategy({
        clientID: credentials.google.client_id,
        clientSecret: credentials.google.client_secret,
        callbackURL: credentials.google.redirect_uris[0]
    },
    function (token, tokenSecret, profile, done) {
        User.findOneAndUpdate(
            { googleId: profile.id },
            { googleId: profile.id, name: profile.displayName, profilePicURL: profile.photos[0].value },
            { new: true, upsert: true },
            done
        )
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
});
passport.deserializeUser((id, done) => {
    User.findOne({_id: id}, done)
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.status(403).json({
            message: 'must be logged in to continue',
        });
    }
}

module.exports = {
    login: passport.authenticate("google", { scope: "profile" }),
    callback: passport.authenticate("google", { failureRedirect: "/login" }),
    isLoggedIn
}