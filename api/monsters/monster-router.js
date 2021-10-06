const express = require('express')
const mb = require('./monster-model');


const router = express.Router()

router.get('/', async (req, res) => {
    const allMonsters = await mb.getAll()
    res.status(200).json(allMonsters)
})

router.get('/:id', async (req, res) => {
    const monster = await mb.getById(req.params.id)
    res.status(200).json(monster)
})





//eslint-disable-next-line
router.use("*", (err, req, res, next) => {
    res.status(err.status || 500).json(
        {
            message: err.message ? err.message : "something went wrong"

        }
    )

})
module.exports = router
