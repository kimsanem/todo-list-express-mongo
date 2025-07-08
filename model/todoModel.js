// const mongoose = require("mongoose");

// const TodoSchema = new mongoose.Schema({
//     title: {
//         type: String, 
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
// },{
//     collection: "todo_app"
// });

// module.exports = mongoose.model("Todo", TodoSchema);

const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
}, { collection: "todo_app",
    timestamps: true,
 });

module.exports = mongoose.model("Todo", todoSchema);