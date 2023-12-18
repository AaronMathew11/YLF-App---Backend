var mongoose = require("mongoose");

var upcomingEventsSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  venue: {
    type: String,
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  studentsCost: {
    type: String,
    trim: true,
  },
  adultsCost: {
    type: String,
    trim: true,
  },
  kidsCost: {
    type: String,
    trim: true,
  },
  regLink: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = mongoose.model("upcomingEventsSchema", upcomingEventsSchema);
