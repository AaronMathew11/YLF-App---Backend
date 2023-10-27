var mongoose= require('mongoose');

var feedbackSchema = mongoose.Schema({
    
    message: {
        type:String,
        required:true,
        trim: true,
    },
    
})

module.exports = mongoose.model('feedbackSchema',feedbackSchema);