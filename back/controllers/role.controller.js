const Role = require("../models/Role.model");
const User = require("../models/User");

 const createRole = async (req, res) => {
   const { name } = req.body;
   if (name) {
     let role = await Role.findOne({ name });
     if (role) {
       return res.send({ code: "error" });
     }
     role = new Role({ name });
     role = await role.save();
     return res.send({ item: role, code: role ? "success" : "error" });
   }
 };

 
 const makeUserAsAdmin = async (req, res) => {
      let { userId, name } = req.body
       name = name  || 'user'
     if(userId) {
       let role= await Role.findOne({ name })
        let user = await User.findById(userId)
        if(user && role) {
          user.roles.push(name)
         await user.save()
        }
    
     } 
    }


module.exports = {
  createRole,
  makeUserAsAdmin
};