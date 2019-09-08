const express = require('express');
const {
    CustomerType
} = require('./../model/db')
var router = express.Router()
router.use((req, res, next) => {
    next();
})
router.get('/', (req, res) => {
    CustomerType.findAll({
        include: [{
            model: CustomerType,
            as: 'CustomerType'
        }]
    }).then(types => {
        res.json(types)
    })
});
module.exports =router;