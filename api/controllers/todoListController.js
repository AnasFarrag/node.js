'use strict';

var mongoose = require('mongoose'),
    Task = mongoose.model('Tasks');

exports.list_all_tasks = (req , res) => {
    Task.find({} , (err,task) => {

        if(err) return res.send(err);

        res.json(task);
    });
    
};

exports.create_a_task = (req,res) => {

    var new_task = new Task(req.body);
    new_task.save((err,task) => {

        if(err)

            res.send(err);
        res.send(task);
    });
};

exports.read_a_task = (req,res) => {
    Task.findById(req.params.taskId , (err,task) =>{

        if(err) return res.send(err);
        res.json(task);
        res.send(task)

    });
};

exports.update_a_task = (req,res) => {
    Task.findOneAndUpdate({_id: req.params.taskId} , req.body , {new:true} , (err,task) => {

        if(err) return res.send(err);
        res.json(task);
    });
};

exports.delete_a_task = (req,res) => {

    Task.remove({_id : req.params.taskId} , (err,task) => {
        if(err) return res.send(err);
        res.json({message : 'Task Successfully delted'});
    });
};