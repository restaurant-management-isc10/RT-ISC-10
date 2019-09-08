const express = require('express');
const { TABLE } = require('./../model/db');

const router = express.Router();

router.use((req, res, next) => {
    //authorize here
    next();
});

// listing all table
router.get('/', (req, res) => {
    TABLE.findAll().then(types => {
        res.json(Result(types));
    });
});

//find tabe by id
router.get('/:id(\\d+)', (req, res) => {
    TABLE.findByPk(req.params.id).then(types => {
        if (types != null) {
            res.json(Result(types));
        } else {
            res.status(404).json(ErrorResult(404, 'Not found!'));
        }
    });
});

//create table
router.post('/', (req, res) => {
    TABLE.create(req.body).then(types => {
        res.json(Result(types));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

//update table
router.put('/:id', (req, res) => {
    TABLE.findByPk(req.params.id).then(types => {
        if (types != null) {
            types.update({
                TD_Position: req.body.TD_Position
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

//delete table
router.delete('/:id', (req, res) => {
    TABLE.destroy({
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