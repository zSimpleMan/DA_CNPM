const express = require('express');
const authModel = require('../models/auth.model');

const router = express.Router();

//sign in
router.post('/', async(req, res) => {

    // req.body = {
    //     "username": "pvhau",
    //     "password": "pvhau"
    // }

    const ret = await authModel.login(req.body);

    if (ret === null) {
        return res.json({
            login: "fail"
        });
    }

    res.json({
        login:"successful",
        username:req.body.username
    });

})

module.exports = router;