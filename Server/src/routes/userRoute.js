// src/routes/user.routes.js
const router = require("express").Router();

const protect= require("../middlewares/authMiddleware");
const rbac = require("../middlewares/rbacMiddleware");

// USER route
router.get("/user", protect); //Later add user controller

// EDITOR 
router.post("/editor", protect, rbac("EDITOR"))//Later add editor controller

// ADMIN only
router.delete("/admin", protect, rbac("ADMIN")) // Later add admin controller

module.exports = router;