const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema(
    {
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength:32,
        unique: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
        maxlength:32,
        unique: true
    }
}, 
{timestamps:true}
);



module.exports = mongoose.model("Todo" ,  todoSchema);
