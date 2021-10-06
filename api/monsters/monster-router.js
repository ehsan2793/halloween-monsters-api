const express = require('express');
const router = express.Router();
const mb = require('./monster-model');
const {
    checkId,
    checkpayload,
    monsterIsUnique,
} = require('./monster-middleware');

router.get('/', async (req, res) => {
    const allMonsters = await mb.getAll();
    res.status(200).json(allMonsters);
});

router.get('/:id', checkId, async (req, res) => {
    const monster = await mb.getById(req.params.id);
    res.status(200).json(monster);
});

router.post('/', checkpayload, monsterIsUnique, async (req, res) => {
    const newMonster = await mb.insert(req.body);
    res.status(201).json(newMonster);
});

router.put('/:id', checkId, checkpayload, monsterIsUnique, async (req, res) => {
    const updatedMonster = await mb.updateById(req.params.id, req.body);
    res.status(200).json(updatedMonster);
});

router.delete('/:id', checkId, async (req, res) => {
    const deletedMonster = await mb.removeById(req.params.id);
    res.status(200).json(deletedMonster);
});

router.delete('/deletAll/:id', checkId, async (req, res, next) => {
    try {
        const deleteGroupMonsters = await mb.groupDelete(req.params.id);
        res.status(200).json(deleteGroupMonsters);
    } catch (error) {
        next();
    }
});

//eslint-disable-next-line
router.use('*', (err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message ? err.message : 'something went wrong',
    });
});

module.exports = router;
