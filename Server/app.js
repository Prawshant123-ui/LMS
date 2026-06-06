require('dotenv').config()
const express=require('express')
const cors=require('cors')
const authRoute=require("./src/routes/authRoute")
const userRoute=require("./src/routes/userRoute")

const app=express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Api is working!!")
})

app.use('/api/auth',authRoute)
app.use('/api/user',userRoute)

module.exports=app