const mongoose = require ("mongoose");
const Schema = mongoose.Schema;
const {admiredPlayerSchema} = require("./admiredPlayer")

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    profileName: {type: String, default: "New User"},
    location: String,
    age: Number,
    favouriteTeam: String,
    playersAdmired: [{type: admiredPlayerSchema}]
})

const User = mongoose.model("User", userSchema)

module.exports = User