var mongoose= require('mongoose');

var prayerSchema = mongoose.Schema({
    
    name:{
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
    }


})

module.exports = mongoose.model('prayerSchema',prayerSchema);