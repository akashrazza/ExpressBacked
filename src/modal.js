const mongoose = require('mongoose');
const QuestionSchema = mongoose.Schema({
    question:{
        type:String,
        required:true
    },
    option1:{
        type:String,
        required:true
    },
    option2:{
        type:String,
        required:true
    },
    option3:{
        type:String,
        required:true
    },
    option4:{
        type:String,
        required:true
    },
    correct:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    }
})
const QuestionModel = mongoose.model('Question',QuestionSchema);
module.exports = QuestionModel;
