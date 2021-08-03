const router = require('express').Router()
const { fetchUsers } = require('../controllers/user.controller');


router.get('/', fetchUsers);

module.exports = router