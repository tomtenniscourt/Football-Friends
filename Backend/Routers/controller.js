const express = require("express")
const User = require("../Models/user")
const AdmiredPlayer = require("../Models/admiredPlayer")

const router = express.Router()


/******* USER FUNCTIONS *******/

// INDEX
const getAllUsers = async (req,res) => {
    try {
        allUsers = await User.find({})
        res.json(allUsers)
    } catch (error) {
            console.log(error);
            res.status(500).json(error);
    }
}

// Get One User
const getOneUser = async (req,res) => {
    try {
        user = await User.findById(
            req.params.id
        )
        res.json(user)
    } catch (error) {
            console.log(error);
            res.status(500).json(error);
    }
}




module.exports = {
    getAllUsers,
    getOneUser,
}