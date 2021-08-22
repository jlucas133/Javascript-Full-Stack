const express = require('express');

const router = express.Router();

const Checklist = require('../models/checklist')

router.get('/', async (req, res) => {
    try {
        let checklists = await Checklist.find();
        res.status(200).json(checklists);

    }catch(err) {
        res.status(500).json(err);
    }
})
router.post('/', async (req, res) => {
    let { name } = req.body;

    try {
        let checklist = await Checklist.create({name})
        res.status(200).json(checklist);

    }catch(err) {
        res.status(422).json(err);
    }

})

router.get('/:id', async (req, res) => {
    try {
        let checklist = await Checklist.findById(req.params.id);
        res.status(200).json(checklist);

    }catch(err) {
        res.status(422).json(err);
    }
})

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`PUT ID: ${req.params.id}`);
})
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
    res.send(`Delete ID: ${req.params.id}`);
})
module.exports = router;