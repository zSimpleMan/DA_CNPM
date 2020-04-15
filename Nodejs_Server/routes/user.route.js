const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router();

//sign up
router.post('/', async(req, res) => {

    const check = await userModel.singleByUserName(req.body.username);
    if (check.length > 0) {
        return res.json({
            message: 'username already exists',
        })
    }

    const result = await userModel.add(req.body);

    const ret = {
        message:"successful",
        id: result.insertId,
        ...req.body
    }

    delete ret.password;
    res.status(201).json(ret);
})

module.exports = router;