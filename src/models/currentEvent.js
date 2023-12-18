var mongoose = require("mongoose");

var currentEventSchema = mongoose.Schema({
  img: {
    type: String,
  },
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
  schedule: {
    type: String,
    trim: true,
  },
  material: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("currentEventSchema", currentEventSchema);
