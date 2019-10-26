const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, "A task must have a title"]
    },
    description:{
        type: String,
        required:[true, "A task must have a description"],
        minlength: [5,"Be more descriptive."]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

mongoose.model("Task", TaskSchema);

module.exports = TaskSchema;