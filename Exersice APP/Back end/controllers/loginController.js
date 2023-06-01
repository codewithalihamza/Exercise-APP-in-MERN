const express = require('express');
const userModel = require('../models/userModel');

const loginController = async (req, res) => {
    try {
        const userDetails = await userModel.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (userDetails) {
            res.send({ message: "login successfully", userDetails: userDetails });
        }
        else {
            res.json("user not exist!");
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = loginController