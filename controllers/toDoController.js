const toDoModel = require("../models/toDoModel");

module.exports.getToDo = async (req, res) => {
    const toDo = await toDoModel.find();
    res.send(toDo);
}

module.exports.saveToDo = (req, res) => {
    const { task } = req.body;

    toDoModel
        .create({ task })
        .then((data) =>{ 
            console.log("Task Added Successfully")
            console.log(data)
            res.send(data)
        })
        .catch((err) => console.log(err));
}

module.exports.updateToDo = (req, res) => {
    const { id } = req.params;
    const { task } = req.body;

    toDoModel.findByIdAndUpdate(id, { task })
        .then(() => res.send("Task Updated Successfully"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Error Updating Task" });
        });
};

module.exports.updateCompleted = (req, res) => {
    const { id } = req.params;

    toDoModel.findByIdAndUpdate(id, {
        completed: 'true'
    })
        .then(() => res.send("Task Updated Successfully"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Error Updating Task" });
        });
};

module.exports.updateUncompleted = (req, res) => {
    const { id } = req.params;

    toDoModel.findByIdAndUpdate(id, {
        completed: 'false'
    })
        .then(() => res.send("Task Updated Successfully"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Error Updating Task" });
        });
};

module.exports.deleteToDo = (req, res) => {
    const { id } = req.params;

    toDoModel.findByIdAndDelete(id)
        .then(() => res.send("Task Deleted Successfully"))
        .catch((err) => {
            console.log(err);
            res.send({ error: err, msg: "Error Deleting Task" });
        });
};