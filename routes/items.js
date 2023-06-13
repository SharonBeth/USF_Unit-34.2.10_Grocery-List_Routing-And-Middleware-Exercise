const Item = require('../item');
const express = require('express');

const router = express.Router();

router.get('', (req, res, next) => {
    try {
        return res.json({ items: Item.findAll() })
    } catch (err) {
        return next(err)
    }

});

router.post('', (req, res, next) => {
    try {
        let postItem = ({ item: })
    } catch (err) {
        return next(err)
    }
});

router.get('/:name', (req, res, next) => {
    try {
        let findItem = ({ item: Item.find(req.params.name) })
        return res.json({item:findItem});
    } catch (err) {
        return next(err)
    }
});

router.patch('', (req, res, next) => {
    try {
    } catch (err) {
        return next(err)
    }
});

router.delete('', (req, res, next) => {
    try {
    } catch (err) {
        return next(err)
    }
});

module.exports = router;