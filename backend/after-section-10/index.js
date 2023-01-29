const express= require("express");
const { connection } = require("./config/db");
const router = require("./routers/tourRouter")
const cors= require("cors")
const reviewRouter= require("./routers/reviewRouter")
const userRouter= require("./routers/userRoutes")

const app= express()
app.use(cors())
app.use(express.json())
app.use("/tour",router)
app.use("/user",userRouter)

app.use("/review",reviewRouter)


app.listen(8080,async()=>{
    
    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log(err)
    }
    console.log("Listening on Port 8080")
})