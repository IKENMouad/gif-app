const User = require("../models/User")

const fetchUsers = async (req, res) => {
    const users = await User.find({})
    res.status(200)
        .send({ items: users, total: users?.length });
}

const fetchUser = async (req, res) => {
    let { userId } = req.query
    userId = userId || req.user.id
    const user = await User.findById(userId);
    res.status(200)
        .send({ item: user, code: user._id ? 'success' : 'failed' });
}
 


module.exports = {
    fetchUsers,
    fetchUser
}