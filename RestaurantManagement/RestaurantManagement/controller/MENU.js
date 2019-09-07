const express = require('express');
const { MENU, MENU_TYPES } = require('./../model/db');

const router = express.Router();

router.use((req, res, next) => {
    //authorrize here
    next();
});

//get list menu
router.get('/', (req, res) => {
    MENU.findAll({
        include: [{
            model: MENU_TYPES,
            as: 'menuTypes'
        }]
    }).then(types => {
        res.json(Result(types));
    });
});

//find menu by id
router.get(':/id(//d+)', (req, res) => {
    MENU.findByPk(req.params.id).then(types => {
        if (types != null) {
            res.json(Result(types));
        } else {
            res.status(404).send(ErrorResult(404, 'Not found'));
        }
    });
});

//create MENU
router.post('/', (req, res) => {
    MENU.create(req.body).then(types => {
        res.json(Result(types));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    })
});

//update MENU
router.put(':/d', (req, res) => {
    MENU.findByPk(req.params.id).then(types =>{
        if(id!= null){
            types.update({
                MT_ID: req.body.MT_ID,
                M_Name: req.body.M_Name,
                M_Price: req.body.M_Price,
                M_Image: req.body.M_Image
            }).then(types =>{
                res.json(Result(types));
            }).catch(err => {
                return res.status(400).send(ErrorResult(400,err.errors));
            });
        } else {
            res.status(404).send(ErrorResult(404,'Not found!'));
        }
    });
});

//delete customer type
router.delete('/:id', (req, res) => {
    MENU.destroy({
        where: {
            id: req.params.id
        }
    }).then(type => {
        res.json(Result(types));
    }).catch(err => {
        return res.status(500).send(ErrorResult(500, err.errors));
    });
});

module.exports = router;