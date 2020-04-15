const bcrypt = require('bcryptjs');
const db = require('../utils/db');

module.exports = {
    add: entity => {
        // entity = {
        //     "username": "pvhau",
        //     "password": "pvhau",
        //     "email": "pvhaun@gmail.com"
        // }
        const hash = bcrypt.hashSync(entity.password, 8);
        entity.password = hash;
        return db.add(entity, 'users');
    },

    singleByUserName: username => db.load(`select * from users where username = '${username}'  `),
};