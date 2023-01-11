const mongoose= require("mongoose")
require('dotenv').config()
const DB= process.env.MONGO_URL.replace('<PASSWORD>',process.env.PASSWORD)
mongoose.set('strictQuery', false);
const connection = mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    // .then(() => console.log("Database connected!"))
    // .catch(err => console.log(err));
    
module.exports={
    connection 
}