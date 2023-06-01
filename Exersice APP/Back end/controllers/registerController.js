const express = require('express');
const userModel = require('../models/userModel');

const app = express();

const registerController = async (req, res) => {
    const userDetails = await userModel(req.body);
    try {
        const recordMatch = await userModel.findOne({
            email: req.body.email,
        });
        if (recordMatch) {
            res.json("email already exists");
        } else {
            userDetails.save();
            res.json("Signed Up Successfully");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports= registerController