const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.register = async (req,res)=> {
    const {email,password} = req.body

    const existing = await User.findOne({email})
    if(existing) {
        return res.status(400).json({message: "Email already exists"})
    }

    const hashed = await bcrypt.hash(password,10);
    const user = await User.create({email,password: hashed})

    res.status(201).json({message: "User registered successfully"});
};

exports.login = async(req,res)=>{
  const { email, password} = req.body
const user = await User.findOne({email})
  if(!user) {
    return res.status(400).json({message: 'Invalid User'})
  }
  const match = await bcrypt.compare(password,user.password);

  if(!match){
    return res.status(400).json({message: 'Invalid Credentials'})

  }
  const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1h"})
 res.json({token})
}