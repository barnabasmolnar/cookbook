const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    googleId: { type: String, required: true },
    name: { type: String, required: true },
    profilePicURL: String
});

module.exports = mongoose.model("User", UserSchema);