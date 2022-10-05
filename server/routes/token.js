const express = require("express");
const router=express.Router()
const {createToken,stkPush}= require("../controller/token")

router.post("/",createToken,stkPush)

module.exports=router
