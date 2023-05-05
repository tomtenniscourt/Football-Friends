const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    profileName: {type: String, default: "New User"},
    location: String,
    age: Number,
    favouriteTeam: String,
    playersAdmired: []
})

const User = mongoose.model("User", userSchema)

module.exports = Log