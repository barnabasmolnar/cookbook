const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    profilePicURL: String
});

module.exports = mongoose.model("User", UserSchema);