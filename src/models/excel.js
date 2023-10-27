var mongoose = require("mongoose");

var excelSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  leadConnectors: {
    type: String,
    trim: true,
  },
  followupConnecter: {
    type: String,
    trim: true,
  },
  cellConnecter: {
    type: String,
    trim: true,
  },
  followupPastoral: {
    type: String,
    trim: true,
  },
  daysPresent: {
    type: Number,
    trim: true,
  },
  instruments: {
    type: String,
    trim: true,
  },
  attendance: {
    type: String,
    trim: true,
  },
  contact: {
    type: String,
    trim: true,
  },
  attendanceComment: {
    type: String,
    trim: true,
  },
  followupOwner: {
    type: String,
    trim: true,
  },
  analysisPeriod: {
    type: String,
    trim: true,
  },
  potentialCellMember: {
    type: String,
    trim: true,
  },
  growthStage: {
    type: String,
  },
  currentCellGroup: {
    type: String,
  },
  proposedPrimaryCell: {
    type: String,
    trim: true,
  },
  proposed2ndCell: {
    type: String,
    trim: true,
  },
  proposed3rdCell: {
    type: String,
    trim: true,
  },
  teacher: {
    type: String,
    trim: true,
  },
  cellLeader: {
    type: String,
    trim: true,
  },
  remarks: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("excelModel", excelSchema);
