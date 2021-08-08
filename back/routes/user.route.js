const router = require('express').Router()
const { fetchUsers, fetchUser } = require('../controllers/user.controller');


router.get('/', fetchUsers);
router.get("/:userId", fetchUser);

module.exports = router