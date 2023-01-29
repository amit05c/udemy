const User = require("../models/userModel")

const createUser= async(req,res)=>{
    try{
      let newUser= User(req.body)
      await newUser.save()
      res.send(newUser)
    }
    catch(err){
     res.status(400).send("something Error")
    }
}

const getUser=async(req,res)=>{
    try{
        let allusers= await User.find({})
         res.send(allusers)
    }
    catch(err){
        res.status(401).send("Someting Error")
    }
}

module.exports={
    createUser,
    getUser
}