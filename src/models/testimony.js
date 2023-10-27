var mongoose= require('mongoose');

var testimonySchema = mongoose.Schema({
    
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

module.exports = mongoose.model('testimonySchema',testimonySchema);