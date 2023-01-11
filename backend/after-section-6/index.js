const express= require("express")
const { connection } = require("./config/db")
const router = require("./routers/tourRouter")
const cors= require("cors")

const app= express()
app.use(cors())
app.use(express.json())
app.use("/tour",router)


app.listen(8080,async()=>{
    
    try{
        console.log("Listening on Port 8080")
    }
    catch(err){
        console.log(err)
    }
})