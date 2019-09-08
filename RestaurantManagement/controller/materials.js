const express = require('express');
const {MATERIALS} = require('./../model/db');

const router = express.Router();

router.use((req, res, next) => {
    //authorize here
    next();
});

// listing all materials
router.get('/', (req, res) => {
    MATERIALS.findAll().then(types => {
        res.json(Result(types));
    });
});

//find material by id
router.get('/:id(\\d+)', (req, res) => {
    MATERIALS.findByPk(req.params.id).then(types => {
        if(types != null) {
            res.json(Result(types));
        } else {
            res.status(404).json(ErrorResult(404, 'Not found!'));
        }
    });
});

//create material
router.post('/', (req, res) => {
    MATERIALS.create(req.body).then(types => {
        res.json(Result(types));
    }).catch(err => {
        return res.status(400).send(ErrorResult(400, err.errors));
    });
});

//update material
router.put('/:id', (req, res) => {
    MATERIALS.findByPk(req.params.id).then(types => {
        if(types != null) {
            types.update({
                MA_T_ID: req.body.MA.T.ID,
                MA_Name: req.body.MA_Name,
                MA_Supplier: req.body.MA_Supplier,
                MA_Unit: req.body.MA_Unit,
                MA_Count: req.body.MA_Count,
                MA_Cost: req.body.MA_Cost,
                MA_Expiration_Date: req.body.MA_Expiration_Date,
                MA_Import_Date: req.body.MA_Import_Date
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

//delete material
router.delete('/:id', (req, res) => {
    MATERIALS.destroy({
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