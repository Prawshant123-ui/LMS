const prisma=require("../config/prisma")
const bcrypt=require('bcryptjs')
const {generateToken}=require("../utils/jwt")


const register=async(req,res)=>{
    try {
        const {name,email,password}=req.body

        const existingUser=await prisma.user.findUnique(
           { where : {email}}
        )
        if(existingUser){
            res.status(400).json({message:"User alredy exists!!"})
        }

        const hashedPassword=await bcrypt.hash(password,10)

        const user =await prisma.user.create({
            name,
            email,
            password:hashedPassword,
            role:role ||'USER',
        })
        const token=generateToken(user)

         res.status(201).json({
    user: { id: user.id, email: user.email, role: user.role },
    token,
  });
    } catch (error) {
        
    }
}