var mongoose= require('mongoose');

var WorshipSchema = mongoose.Schema({
    
    date:{
        type:String,
        required:true,
        trim:true
    },
    worshipLeader:{
        type:String,
        required:true,
        trim:true
    },
    home:{
        type:String,
        required:true,
        trim:true
    },
    pianist:{
        type:String,
        trim:true
    },
    guitarist:{
        type:String,
        trim:true
    },
    drummer:{
        type:String,
        trim:true
    },



})

module.exports = mongoose.model('WorshipSchema',WorshipSchema);