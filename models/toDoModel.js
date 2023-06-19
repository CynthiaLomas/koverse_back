const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
    task:{
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('toDo', toDoSchema);