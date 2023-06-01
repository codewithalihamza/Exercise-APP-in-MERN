const express = require('express');
const activityModel = require('../models/activityModel');


const activityPostController = async (req, res) => {
    const activityDetails = await activityModel(req.body);
    activityDetails.save();
    res.send(activityDetails);
}

module.exports = activityPostController