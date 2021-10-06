const yup = require('yup');

const monsterSchema = yup.object().shape({
    Monster_name: yup
        .string('monster need to be a string')
        .trim()
        .min(3, 'monster name need to be at least 3 character')
        .strict(true)
        .required('monster name is required'),
    Description: yup
        .string('descriptions is paragraph')
        .trim()
        .required('descriptions is required')
        .min(10, 'description need to be at least 10 characters')
        .strict(true),
});

module.exports = monsterSchema;
