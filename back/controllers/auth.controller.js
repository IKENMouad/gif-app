const User = require("../models/User");
const bcryptjs = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')
const { v4: uuidv4 } = require('uuid');
const nodemailer = require('nodemailer');

const register = async (req, res) => {
    const { email, name, password, mobile } = req.body
    if (email && name && password, mobile) {
        const fetchedUser = await User.findOne({ email })
        if (fetchedUser)
            return res.send({ message: 'user exists with this email address', user: fetchedUser });
        const salt = await bcryptjs.genSalt(10)
        const cryptedPassword = await bcryptjs.hash(password, salt);
        const token_verification = uuidv4()
        const user = new User({ email, name, password: cryptedPassword, mobile, token_verification })
        await user.save()
        if (user._id) {
            const { code } = await sendMail(user.email)
            if (code && code == "success") {
                return res.status(201).send({
                    user,
                    message: 'confirm account'
                    // http://localhost:5000/auth/confirm-account/:token_verification
                });
            }
        }
    } else {
        return res.send('err of validation');
    }

}

async function sendMail(receverAdress) {
    try {
        let testAccount = await nodemailer.createTestAccount();

        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>',
            to: receverAdress,
            subject: "Hello ✔",
            text: "Hello world?",
            html: "<b>Hello world?</b>",
        });

        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        if (info && info.messageId) {
            return { ...info, code: 'success' }
        } else {
            return { code: 'failed' }
        }

    } catch (error) {
        console.log('error', error)
    }
}

const confirmPass = async (req, res) => {
    const { token_verification } = req.params;
    if (token_verification) {
        let fetchedUser = await User.findOne({ token_verification })
        if (fetchedUser && fetchedUser.token_verification) {
            fetchedUser = await User.updateOne({ token_verification }, { token_verification: null, email_verification: new Date })
            return res.send({
                code: fetchedUser.ok == 1 ? 'success' : 'failed'
            })
        } else {
            return res.send({
                code: 'failed',
                message: 'your account was activated '

            })
        }
    }

}

const login = async (req, res) => {
    const { email, password } = req.body
    if (email && password) {
        const fetchedUser = await User.findOne({ email })
        if (fetchedUser) {
            if (!fetchedUser.email_verification) {
                return res.send('please confirm your account to sign in');
            } else {
                let isSame = await bcryptjs.compare(password, fetchedUser.password)
                if (isSame) {
                    const token = jsonwebtoken.sign({ id: fetchedUser._id, email: fetchedUser.email }, 'secret')
                    if (token) {
                        return res.header('Authorization', token).status(200).send({ user: fetchedUser, token });
                    }
                } else {
                    return res.status(400).send({ code: 'failed', message: 'password not match' });
                }
            }
        }
    }
}

const updatePassword = async (req, res) => {
    let { oldPass, newPass } = req.body
    let { userId } = req.query
    userId = userId || req.user.id
    let user = await User.findById(userId)
    if (userId && user) {
        let flag = await bcryptjs.compare(oldPass, user.password)
        if (flag) {
            const salt = await bcryptjs.genSalt(10)
            newPass = await bcryptjs.hash(newPass, salt)
            user.password = newPass
            await user.save()
            return res.send({ user, })
        }
    } else {
        return res.send({ code: 'failed' })

    }
}

const sendConfirmPassword = async (req, res) => {
    const { email } = req.body
    if (email) {
        let user = await User.findOne({ email })
        if (user) {
            user.token_verification = uuidv4()
            user = await user.save();
            // SEND EMAIL 
            return res.send({ code: user.token_verification ? 'success' : 'failed' })
        }
    }
}
const validateResetPassword = async (req, res) => {
    const { token_verification } = req.params;
    let { newPassword } = req.body
    if (token_verification && newPassword) {
        let fetchedUser = await User.findOne({ token_verification })
        if (fetchedUser && fetchedUser.token_verification) {
            let salt = await bcryptjs.genSalt(10)
            newPassword = await bcryptjs.hash(newPassword, salt)
            fetchedUser = await User.updateOne(
                { token_verification },
                {
                    token_verification: null,
                    password: newPassword
                })
            return res.send({
                code: !fetchedUser.token_verification ? 'success' : 'failed',
                message: !fetchedUser.token_verification ? 'your password was reseted ' : 'error'
            })
        } else {
            return res.send({
                code: 'failed',
                message: 'your account was activated '

            })
        }
    }

}

module.exports = {
    register,
    login,
    confirmPass,
    updatePassword,
    sendConfirmPassword,
    validateResetPassword
}