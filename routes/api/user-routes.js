const router = require('express').Router();
const {
    getUsers,
    addUser,
    getUserByID,
    updateUser,
    deleteUser
} = require('');

router.route('/')
.get(getUsers)
.post(addUser);

module.exports = router;