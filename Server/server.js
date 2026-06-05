const connectDB=require("./src/config/db")
const app=require("./app")

const PORT=process.env.PORT || 3000
const startServer=async(req,res)=>{
    try {
        await connectDB()
        app.listen(PORT,()=>{
            console.log(`Server starts on : http://localhost:${PORT}`)
        })
        console.log("Server started")
    } catch (error) {
        console.log("Server did not started")
        process.exit(1);
    }
}

startServer()