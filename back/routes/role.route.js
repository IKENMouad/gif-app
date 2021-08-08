const router = require('express').Router();


const { createRole, makeUserAsAdmin } = require('../controllers/role.controller');


router.post('/' , createRole )
router.post("/make-as-admin", makeUserAsAdmin);


module.exports = router; 