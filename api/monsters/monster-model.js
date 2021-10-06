const db = require('../../data/connect');

const getAll = () => {
    return db('monsters');
};
const getById = async (id) => {
    const monster = await db('monsters').where({ monster_id: id }).first();
    return monster;
};
const insert = async (monster) => {
    const [id] = await db('monsters').insert(monster);
    return getById(id);
};
const updateById = async (id, monster) => {
    await db('monsters').where({ monster_id: id }).update(monster);
    return getById(id);
};
const removeById = async (id) => {
    const deletedMonster = getById(id);
    await db('monsters').where({ monster_id: id }).del();
    return deletedMonster;
};

const checkName = async (name) => {
    const found = await db('monsters')
        .where('Monster_name', 'like', `%${name}%`)
        .first();
    return found;
};

const groupDelete = async (id) => {
    const allDeleted = await db('monsters').where('monster_id', '>=', id);
    await db('monsters').where('monster_id', '>=', id).del();
    return allDeleted;
};

module.exports = {
    getAll,
    getById,
    insert,
    updateById,
    removeById,
    checkName,
    groupDelete,
};
