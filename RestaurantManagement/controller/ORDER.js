const express = require('express');
const {ORDER} = require('./../model/db');

const router = express.Router();

router.use((req, res, next) => {
    //authorize here
    next();
});

// listing all order
router.get('/', (req, res) => {
    ORDER.findAll().then(types => {
        res.json(Result(types));
    });
});

//find order by id
router.get('/:id(\\d+)', (req, res) => {
    ORDER.findByPk(req.params.id).then(types => {
        if(types != null) {
            res.json(Result(types));
        } else {
            res.status(404).json(ErrorResult(404, 'Not found!'));
        }
    });
});

//create order
router.post('/', (req, res) => {
    ORDER.create(req.body).then(types => {
        res.json(Result(types));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

//update order
router.put('/:id', (req, res) => {
    ORDER.findByPk(req.params.id).then(types => {
        if(types != null) {
            types.update({
                M_ID: req.body.M_ID,
                TD_ID: req.body.TD_ID,
                O_Count: req.body.O_Count
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

//delete customer type
router.delete('/:id', (req, res) => {
    ORDER.destroy({
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