const mongoose = require("mongoose");
const activitySchema = mongoose.Schema({
   
    description: {
      type: String,
      require:true
    },
    activityType: {
      type: String,
      require:true
    },
    duration: {
      type: Number,
      require:true
    },
    date: {
      type: String,
      require:true
    },
     email: {
      type: String,
      require:true,
    },
  });
  module.exports = mongoose.model("activitydetails", activitySchema);