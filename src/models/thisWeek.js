var mongoose = require("mongoose");

var thisWeekSchema = mongoose.Schema({
  announcement: {
    type: String,
    required: true,
    trim: true,
  },
  worship: {
    type: String,
    required: true,
    trim: true,
  },
  gifts: {
    type: String,
    required: true,
    trim: true,
  },
  pftn: {
    type: String,
    required: true,
    trim: true,
  },
  welcome: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  fellowship: {
    type: String,
    required: true,
    trim: true,
  },
  coverImage: {
    data: Buffer,
    contentType: String,
  },
  ppt: {
    type: String,
    trim: true,
  },
  songlist: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("thisWeekSchema", thisWeekSchema);
