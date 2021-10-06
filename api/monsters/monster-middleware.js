const { getById, checkName } = require('./monster-model');
const monsterSchema = require('../../services/monster-schema');

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
    try {
        const validPayload = await monsterSchema.validate(req.body);
        req.body = validPayload;
        next();
    } catch (error) {
        next(error);
    }
};
const monsterIsUnique = async (req, res, next) => {
    try {
        const nameExist = await checkName(req.body.Monster_name);
        if (nameExist === undefined) {
            next();

        } else {
            next({
                status: 404,
                message: `Monster with the name of ${req.body.Monster_name} exist `,
            });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = {
    checkId,
    checkpayload,
    monsterIsUnique,
};
