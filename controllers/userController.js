const User = require("../models/userSchema")

//add a user
const addUser = async(req, res)=>{

    //hashing password with bcrypt
    const salt = await bcrypt.genalt
    const newUser = new User({
        username: req.body.username,
        email:req.body.email,
        password:req.body.password
    })
    await newUser.save();
    res.status(201).json({
        id: newUser._id,
        username:newUser.username,
        email:newUser.email
    });
}
module.exports = {addUser}