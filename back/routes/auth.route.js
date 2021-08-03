const { register, login, confirmPass, updatePassword } = require('../controllers/auth.controller');
const { isAuth } = require('../middlewares/auth.middleware');

const router = require('express').Router()


router.post('/register', register);
router.post('/login', login);
router.post('/confirm-account/:token_verification', confirmPass);
router.post('/update-password/', [isAuth], updatePassword);

module.exports = router