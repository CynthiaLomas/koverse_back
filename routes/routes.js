var express = require('express');
const router = express.Router();

const { getToDo, saveToDo, updateToDo, updateCompleted, deleteToDo } = require("../controllers/toDoController");

router.get("/tasks", getToDo);

router.post("/save", saveToDo);

router.put("/update/:id", updateToDo);

router.put("/complete/:id", updateCompleted);

router.delete("/delete/:id", deleteToDo);

module.exports = router;