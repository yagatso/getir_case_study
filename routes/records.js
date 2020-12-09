var express = require('express');
var router = express.Router();
var { Record } = require('../models/record');
var validate = require('../validations/validate')


router.post('/', (req, res) => {

    const { error } = validate(req.body);
    if (error) return res.status(400).send({
            code: 400,
            msg: error.details[0].message,
            records: []
     });

    const { startDate, endDate, minCount, maxCount } = req.body;

    Record.aggregate([
        {
            $addFields: {
                totalCount: { add: ["$minCount", "$maxCount"] }
            }
        },
        { //matching paramteres with specific rules
            $match: {
                totalCount: {
                    $gte: parseInt(minCount),
                    $lte: parseInt(maxCount)
                },
                createdAt: {
                    $gte: new Date(startDate),
                    $lte: new Date(endDate)
                }
            }
        },
        { // set the visibility of res
            $project: {
                _id: false,
                key: true,
                createdAt: true,
                totalCount: true
            }
        }
    ]).exec()
        .then(data => {
            res.status(200).json({
                code: 0,
                msg: 'Success',
                records: data
            });
        })
        .catch(err => {
            res.status(400).send({
                code: 400,
                msg: err.message,
                records: []
            });
        });
       
});

module.exports = router;