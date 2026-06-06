
const rbac=(...allowedRoles)=>{
    return(req,res,next)=>{
        const userRole=req.user.role

        if(!allowedRoles.includes(userRole)){
            res.status(403).json({
                  message: "Forbidden: insufficient permissions",
            })
        }
            next()

    }
}

module.exports=rbac