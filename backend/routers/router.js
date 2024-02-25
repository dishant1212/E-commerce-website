const express=require("express")
const router=express.Router()
const {signUpHandler,
    signInHandler,
    addClothesHandler,
    getClothesHandler,
    addElectronicsHandler,
    getElectronicsHandler} = require("../controller/controller")



router.route("/sign-up")
.post(signUpHandler)


router.route("/sign-in")
.post(signInHandler)

router.route("/add-clothes")
.post(addClothesHandler)
.get(getClothesHandler)

router.route("/add-electronics")
.post(addElectronicsHandler)
.get(getElectronicsHandler)



module.exports=router