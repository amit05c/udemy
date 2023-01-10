const mongoose= require("mongoose")
require('dotenv').config()
const DB= process.env.MONGO_URL.replace('<PASSWORD',process.env.PASSWORD)
const connection = mongoose.connect(DB,{
    useNewUrlParser:true,
     useCreateIndex:true,
     useFindAndModify:true
})
module.exports={
    connection
}