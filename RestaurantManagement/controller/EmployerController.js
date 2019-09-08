const express = require('express');
const {
    Employees
} = require('../model/db');
var router = express.Router();
router.use((req, res, next) => {
    next();
})
router.get('/', (req, res) => {
    Employees.findAll(

    ).then(type => {
        res.json(type)
    })
});
router.get('/:id', (req, res) => {
    Employees.findByPk(req.params.id).then(type => {
        if (type != null) {
            res.json(type);

        } else {
            res.status(404).send('Not Found 123');
        }
    })
});
router.delete('/:id', (req, res) => {
    Employees.destroy({
        where: {
            id: req.params.id
        }
    }).then(type => {
        res.json(type);
    }).catch(err => {
        res.status(404).send('Not Found 123');
    })

});
router.post('/', (req, res) => {
    Employees.create(req.body).then(type => {
        res.json(type);
    }).catch(err => {
        return res.status(404).send(err.errors);
    });
});
router.put(':/id',(req,res)=>{
    Employees.findByPk(req.params.id).then(type=>{
        if(type != null){
            type.update({
                E_Name: req.body.E_Name,
                E_Position : req.body.E_Position,
                E_Gender :req.body.E_Gender
            }).then(type=>{
                res.json(type);
            }).catch(err =>{
                return res.status(404).send(err.errors);
            });
        }else{
            res.status(404).send('Not found ');
        }
    })
})
module.exports = router;