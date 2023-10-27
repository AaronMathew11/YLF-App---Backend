var mongoose = require("mongoose");

var openKitchenSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  address1: {
    type:String,
    required:true,
    trim:true
  },
});

module.exports = mongoose.model("openKitchenSchema", openKitchenSchema);
