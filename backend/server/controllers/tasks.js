const mongoose = require('mongoose'),
    Task = mongoose.model('Task');


module.exports = {
    getTasks: (req,res) => {
        Task.create(req.body)
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    getOneTask: (req,res) => {
        Task.findOne({_id: req.params.taskId})
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    createTask: (req,res) => {
        Task.create(req.body)
            .then(result => res.json({results:result}))
            .catch(err => res.json({errors: err.errors}));
    },
    updateTask: (req,res) => {
        Task.findOneAndUpdate({_id: req.params.taskId},req.body,{runValidators:true})
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    },
    deleteTask: (req,res) => {
        Task.deleteOne({_id: req.params.taskId})
            .then(result => res.json({results: result}))
            .catch(err => res.json({errors: err.errors}));
    }
}