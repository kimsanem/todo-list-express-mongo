const router = require("express").Router();
// import the Todo controller and access by .
// const Todo = require("./controllers/Todo");
// router.get("/todos", Todo.getTodos);
// router.post("/todo", Todo.createTodos);
// router.put("/updated", Todo.updateTodos);
// router.delete("/deleted", Todo.deleteTodos);

// destructure the functions from the Todo controller
const { 
	getTodos, 
	createTodos, 
	updateTodos, 
	deleteTodos 
} = require("./controllers/Todo");


router.get("/", (req, res) => {
	res.send("Let's build a CRUD API!");
});

router.get("/todos", getTodos);
router.post("/todos", createTodos);
router.put("/todos/:id", updateTodos);
router.delete("/todos/:id", deleteTodos);


module.exports = router;