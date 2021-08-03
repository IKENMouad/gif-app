/* eslint-disable no-unused-vars */
const jwt = require('jsonwebtoken')


function isAuth(req, res, next) {
    const token = req.header('Authorization')
    if (!token) {
        return res.status(401).send('Access Denied');
    } else {
        try {
            const verified = jwt.verify(token, 'secret')
            req.user = verified
             next()
        } catch (error) {
            return res.status(400).send('Invalid Token');
        }
    }
}

module.exports = {
    isAuth
}