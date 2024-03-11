const express=require("express")
const router=express.Router()
const {signUpHandler,
    signInHandler,
    addClothesHandler,
    getClothesHandler,
    addElectronicsHandler,
    getElectronicsHandler,
    addHealthProductsHandler,
    getHealthProductsHandler,
    addBeautyPickProductHandler,
    getBeautyPickProductHandler,
    addDiscoverFashionProductsHandler,
    getDiscoverFashionProductsHandler,
    addFurnitureHandler,
    getFurnitureHandler,
    addGroceryProductsHandler,
    getGroceryProductsHandler,
    addPetCareProductsHandler,
    getPetCareProductsHandler,
    addFitnessProductsHandler,
    getFitnessProductsHandler,
    addMenClothesHandler,
    getMenClothesHandler,
    addWomenClothesHandler,
    getWomenClothesHandler} = require("../controller/controller")



router.route("/sign-up")
.post(signUpHandler)


router.route("/sign-in")
.post(signInHandler)

router.route("/clothes")
.post(addClothesHandler)
.get(getClothesHandler)

router.route("/electronics")
.post(addElectronicsHandler)
.get(getElectronicsHandler)

router.route("/healthProducts")
.post(addHealthProductsHandler)
.get(getHealthProductsHandler)

router.route("/beautyPickProducts")
.post(addBeautyPickProductHandler)
.get(getBeautyPickProductHandler)

router.route("/discoverFashionProducts")
.post(addDiscoverFashionProductsHandler)
.get(getDiscoverFashionProductsHandler)


router.route("/furniture")
.post(addFurnitureHandler)
.get(getFurnitureHandler)

router.route("/GroceryProducts")
.post(addGroceryProductsHandler)
.get(getGroceryProductsHandler)

router.route("/petCareProducts")
.post(addPetCareProductsHandler)
.get(getPetCareProductsHandler)

router.route("/fitnessProducts")
.post(addFitnessProductsHandler)
.get(getFitnessProductsHandler)

router.route("/cloth-men")
.post(addMenClothesHandler)
.get(getMenClothesHandler)

router.route("/cloth-women")
.post(addWomenClothesHandler)
.get(getWomenClothesHandler)

module.exports=router