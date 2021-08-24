const express = require('express');

const checklistDepedentRoute = express.Router();
const simpleRouter = express.Router();
const Checklist = require('../models/checklist');
const Task = require('../models/task');

checklistDepedentRoute.get('/:id/tasks/new', async (req, res) => {
    try {
        let task = Task();
        res.status(200).render('tasks/new', {checklistId: req.params.id, task: task});

    }catch(err) {
        res.status(422).render('pages/error', {errors: 'Erro ao carregar o fomulário'});
    }
})

simpleRouter.delete('/:id', async(req, res) => {
    try {
        let task = await Task.findByIdAndDelete(req.params.id);
        let checklist = await Checklist.findById(task.checklist);
        let taskToRemove = checklist.tasks.indexOf(task._id);
        checklist.tasks.splice(taskToRemove,1);
        checklist.save();
        res.redirect(`/checklists/${checklist._id}`);
    } catch (err) {
        res.status(422).render('pages/error', {errors: 'Erro ao remover uma tarefa'});

    }
})

checklistDepedentRoute.post('/:id/tasks', async (req, res) => {
    let {name} = req.body.task;
    let task = new Task({name, checklist: req.params.id});
    try {
        await task.save();
        let checklist = await Checklist.findById(req.params.id);
        checklist.tasks.push(task);
        await checklist.save();
        res.redirect(`/checklists/${req.params.id}`);
    }catch(err) {
        let errors = err.errors;
        res.status(422).render('tasks/new', {task: {...task, errors}, checklistId: req.params.id});
    }
})

simpleRouter.put('/:id', async(req, res) => {

    try {
        let task = await Task.findById(req.params.id);
        task.set(req.body.task);
        await task.save();
        res.status(200).json({task})
    } catch (err) {
        let errors = err.errors;
        res.status(422).json({task: {...errors}});

    }
})
module.exports = {checklistDepedent: checklistDepedentRoute, simple: simpleRouter };