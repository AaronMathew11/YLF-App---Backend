var User = require('../models/user');
var jwt = require('jsonwebtoken');
var config= require('../config/config');


function createToken(user){
    return jwt.sign({id: user.id, email:user.email,roles:user.roles, name:user.name},config.jwtSecret);
}


exports.registerUser=async(req,res)=>{
    if(!req.body.email || !req.body.password){
        return res.status(400).json({'msg':'Please Enter both Email and Password to register'});
    }

    try{
        const user= await User.findOne({email:req.body.email}).exec();
        if(user) return res.status(400).json({msg:'User already exists'});
        var creds={
          email: req.body.email,
          password: req.body.password,
          name:req.body.name,
          roles:req.body.roles
        }
        const newUser = new User(creds);
        await newUser.save();
        return res.status(201).json(newUser);
    } catch(error){
        console.error(error);
        return res.status(400).json({ msg: error.message });
    }
};


exports.loginUser = async (req, res) => {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ msg: 'Both Email and Password are required to Login' });
    }
  
    try {
      const user = await User.findOne({ email: req.body.email }).exec();
      if (user) {
        user.comparePassword(req.body.password, (err, isMatch) => {
          if (isMatch && !err) {
            console.log(user);
            return res.status(200).json({ token: createToken(user) });
          } else {
            return res.status(400).json({ msg: 'Invalid Credentials - Make sure to enter a valid Password' });
          }
        });
      } else {
        return res.status(400).json({ msg: 'Access Denied to Unauthorized Login' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };