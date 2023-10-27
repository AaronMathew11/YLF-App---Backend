//open Kitchen menu

var mongoose = require("mongoose");

var kitchenMenuSchema = mongoose.Schema({
  address:{
    type:String,
    required:true,
    trim:true
  },
  menu: {
    type: Array,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  purchaseItems: {
    type: Array,
  },
  planner:{
    type : String,
    required:true,
    trim:true
  },
  purchaser:{
    type : String,
    required:true,
    trim:true
  },
  washFood:{
    type : String,
    required:true,
    trim:true
  },
  preWash:{
    type : String,
    required:true,
    trim:true
  },

  cutting:{
    type : String,
    required:true,
    trim:true
  },
  masala:{
    type : String,
    required:true,
    trim:true
  },
  garlic:{
    type : String,
    required:true,
    trim:true
  },
  veggies:{
    type : String,
    required:true,
    trim:true
  },
  chicken:{
    type : String,
    required:true,
    trim:true
  },
  rice:{
    type : String,
    required:true,
    trim:true
  },
  salad:{
    type : String,
    required:true,
    trim:true
  },
  serving:{
    type : String,
    required:true,
    trim:true
  },
  postWash:{
    type : String,
    required:true,
    trim:true
  },
  cleaning:{
    type : String,
    required:true,
    trim:true
  },
});

module.exports = mongoose.model("kitchenMenuSchema", kitchenMenuSchema);
