const express = require("express");
const User = require("../Models/user");
const AdmiredPlayer = require("../Models/admiredPlayer");
const JWT = require("jsonwebtoken");

const router = express.Router();

/******* USER FUNCTIONS *******/

// INDEX
const getAllUsers = async (req, res) => {
  try {
    allUsers = await User.find({});
    res.json(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Get One User
const getOneUser = async (req, res) => {
  try {
    user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Create One User
const createUser = async (req, res) => {
  try {
    new_user = await User.create({ email: req.body.email });
    new_user.password = new_user.generateHash(req.body.password);
    new_user.save();
    res.status(201).json(new_user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

// Update a User
const updateOneUser = async (req, res) => {
  try {
    user = await User.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
    });
    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateOneUser,
};
