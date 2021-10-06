const { getById } = require('./monster-model');

const checkId = async (req, res, next) => {
    try {
        const idExist = await getById(req.params.id);
        if (!idExist) {
            next({
                status: 404,
                message: `monster with the id of ${req.params.id} does not exist`,
            });
        } else {
            next();
        }
    } catch (error) {
        next(error);
    }
};
const checkpayload = async (req, res, next) => {
    next();
};
const monsterIsUnique = async (req, res, next) => {
    next();
};

module.exports = {
    checkId,
    checkpayload,
    monsterIsUnique,
};
