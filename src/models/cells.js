var mongoose= require('mongoose');

var cellSchema = mongoose.Schema({
    
    cellname: {
        type:String,
        required:true,
        trim: true,
    },
    
})

module.exports = mongoose.model('cellSchema',cellSchema);