const express = require('express');
const {MENU_TYPES} = require('./../model/db');

const router = express.Router();

router.use((req, res, next) => {
    //authorize here
    next();
});

// listing all customer type
router.get('/', (req, res) => {
    MENU_TYPES.findAll().then(types => {
        res.json(Result(types));
    });
});

//find customer type by id
router.get('/:id(\\d+)', (req, res) => {
    MENU_TYPES.findByPk(req.params.id).then(types => {
        if(types != null) {
            res.json(Result(types));
        } else {
            res.status(404).json(ErrorResult(404, 'Not found!'));
        }
    });
});

//create menu types
router.post('/', (req, res) => {
    MENU_TYPES.create(req.body).then(types => {
        res.json(Result(types));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

//update menu types
router.put('/:id', (req, res) => {
    MENU_TYPES.findByPk(req.params.id).then(types => {
        if(types != null) {
            types.update({
                MT_Name: req.body.MT_Name
            }).then(types => {
                res.json(Result(types));
            }).catch(err => {
                return res.status(400).send(ErrorResult(400, err.errors));
            });
        } else {
            res.status(404).json(ErrorResult(404, 'Not found!'));
        }
    })
});

//delete menu types
router.delete('/:id', (req, res) => {
    MENU_TYPES.destroy({
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