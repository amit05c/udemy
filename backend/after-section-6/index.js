const express= require("express")
const { connection } = require("mongoose")
const router = require("./routers/tourRouter")
const app= express()
app.use(express.json())
app.use("/tour",router)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("Connected")
    }
    catch(err){
        console.log(err)
    }
})