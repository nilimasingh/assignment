const express = require("express")
const router = express.Router()

const {getUser} = require("../userController/userLogin")



router.get("/users",getUser)







module.exports= router



