const Joi = require('joi');

module.exports = function (record)  {
    return validateRecord(record);
};


function validateRecord(record) {
    const schema = Joi.object({
        startDate: Joi.string().required(),
        endDate: Joi.string().required(),
        minCount: Joi.number().required(),
        maxCount: Joi.number().required()
    })

    return schema.validate(record);
}