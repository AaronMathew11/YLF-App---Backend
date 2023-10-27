var mongoose= require('mongoose');

var pastEventSchema = mongoose.Schema({
    
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    date:{
        type:String,
        required:true,
        trim:true
    },
    img:{
        type:String,
    },
    testimony1Name:{
        type:String,
        trim:true,
    },
    testimony2Name:{
        type:String,
        trim:true,
    },
    testimony3Name:{
        type:String,
        trim:true,
    },
    testimony1Description: {
        type:String,
        trim:true,
    },
    testimony2Description: {
        type:String,
        trim:true,
    },
    testimony2Description: {
        type:String,
        trim:true,
    },


})

module.exports = mongoose.model('pastEventModel',pastEventSchema);