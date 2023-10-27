var mongoose= require('mongoose');

var teachingExcelSchema = mongoose.Schema({
    
    stage1a:{
        type:String,
        trim:true
    },
    stage1b:{
        type:String,
        trim:true
    },
    stage2:{
        type:String,
        trim:true
    },
    stage3:{
        type:String,
        trim:true
    },
    stage4:{
        type:String,
        trim:true
    },
})

module.exports = mongoose.model('teachingExcelSchema',teachingExcelSchema);