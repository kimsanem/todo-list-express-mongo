// exports.getTodos = (req, res) => {
//     res.send("here's all your todos!");
// }
// exports.createTodos = (req, res) => {
//     res.send("new todo created!");
// }
// exports.updateTodos = (req, res) => {
//     res.send("todo updated!");
// }
// exports.deleteTodos = (req, res) => {
//     res.send("todo deleted!");
// }

const Todo = require("../model/todoModel");

const getTodos = async (req, res) => {
    // res.send("here's all your todos!");
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch (err) {
        res.status(500).json({ message: err.message});
    }
};

const createTodos = async (req, res) => {
    // res.send("new todo created!");
    try {
        const todo = new Todo({
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        });
        const savedTodo = await todo.save();
        res.status(201).json(savedTodo);
    }catch(err) {
        res.status(500).json({ message: err.message });
    }
};

const updateTodos = async (req, res) => {
    // res.send("todo updated!");
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed
            },
            { new: true, runValidators: true }
        );
        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json(updatedTodo);
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const deleteTodos = async (req, res) => {
    // res.send("todo deleted!");
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }
        res.status(200).json({ message: "Todo deleted successfully" });
    }catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getTodos,
    createTodos,
    updateTodos,
    deleteTodos
};