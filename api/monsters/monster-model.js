const db = require('../../data/connect');

const getAll = () => {
    return db('monsters');
};
const getById = async (id) => {
    const monster = await db('monsters').where({ monster_id: id });
    return monster;
};
const insert = async (monster) => {
    const [id] = await db('monsters').insert(monster);
    return getById(id);
};
const updateById = async (id, monster) => {
    await db('monsters').where({ monster_id: id }).update(monster);
};
const removeById = async (id) => {
    const deletedMonster = getById(id);
    await db('monsters').where({ monster_id: id }).del();
    return deletedMonster;
};

module.exports = {
    getAll,
    getById,
    insert,
    updateById,
    removeById,
};
