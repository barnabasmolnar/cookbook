const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const credentials = require("../credentials.json");

passport.use(new GoogleStrategy({
        clientID: credentials.google.client_id,
        clientSecret: credentials.google.client_secret,
        callbackURL: credentials.google.redirect_uris[0]
    },
    function (token, tokenSecret, profile, done) {
        done(null, profile)
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});

module.exports = {
    login: passport.authenticate("google", { scope: "profile" }),
    callback: passport.authenticate("google", { failureRedirect: "/login" })
}