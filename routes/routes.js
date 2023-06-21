var express = require('express');
const router = express.Router();

const { getToDo, saveToDo, updateToDo, updateCompleted, updateUncompleted, deleteToDo } = require("../controllers/toDoController");

router.get("/tasks", getToDo);

router.post("/save", saveToDo);

router.put("/update/:id", updateToDo);

router.put("/complete/:id", updateCompleted);

router.put("/uncomplete/:id", updateUncompleted);

router.delete("/delete/:id", deleteToDo);

module.exports = router;