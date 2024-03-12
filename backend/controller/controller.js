const bcrypt=require("bcryptjs")
const User = require("../model/user")
const Cloth = require("../model/addClothes")
const Electronic = require("../model/addElectronics")
const HealthProduct = require("../model/addHealthPersonalCare")
const BeautyPickProduct = require("../model/addBeautyPicks")
const DiscoverFashionProducts = require("../model/addDiscoverFashion")
const Furniture = require("../model/addFurniture")
const GroceryProducts = require("../model/addGroceryProducts")
const PetCareProducts = require("../model/addPetCare")
const FitnessProducts=require("../model/addFitnessProducts")
const MenCloth=require("../model/addMenClothes")
const WomenCloth=require("../model/addWomenClothes")
const KidsCloth=require("../model/addKidsClothes")



async function signUpHandler(req, res) {

  const { YourName, MobileNumber, Email, Password, ReEnterPassword } = req.body

  if (!req.body ||
    !YourName ||
    !MobileNumber ||
    !Email ||
    !Password ||
    !ReEnterPassword
  ) {
    return res.status(404).json({ msg: "all faild required" })
  }
  try{
    const user=await User.findOne({Email})
    if(user){
     return res.send({msg:"User Already Exits"})
    }else{
       const createUser= await User.create({ YourName, MobileNumber, Email, Password, ReEnterPassword })
         await createUser.save();
        return res.status(201).json({ msg: "user created successfull" })
    }
    
  }catch(error){
     console.log(error)
  }

  
}

async function signInHandler(req, res) {
  const { Email, Password } = req.body
  const checkUser = await User.findOne({ Email })
  if (checkUser) {
        const user=await bcrypt.compare(Password,checkUser.Password)
        console.log(user)
        if(user){
          res.status(200).send({
                 data: {
                   msg: "Login Successfully",
                    checkUser
                  }
                 })
        }else{
          res.send({msg: "Password didn't match" })
        }
  
  } else {
    res.status(404).send({ msg: "Invalid Credentials" });
  }

}

async function addClothesHandler(req, res) {

  const { imageUrl, name, price } = req.body

  const clothesData = await Cloth.create({ imageUrl, name, price })

  return res.status(201).send({ msg: "Cloth added Successfully" })

}
async function getClothesHandler(req, res) {

  const clothesData = await Cloth.find({})


  return res.status(200).send(clothesData)

}

async function addElectronicsHandler(req, res) {
  const { imageUrl, name, price } = req.body
  const addElectronics = await Electronic.create({ imageUrl, name, price })

  return res.status(201).send({ msg: "Electronics added Successfull" })


}

async function getElectronicsHandler(req, res) {

  const ElectronicsData = await Electronic.find({})


  return res.status(200).send(ElectronicsData)

}

async function addHealthProductsHandler(req, res) {
  const { imageUrl, name, price } = req.body
  const addElectronics = await HealthProduct.create({ imageUrl, name, price })

  return res.status(201).send({ msg: "HealthProducts added Successfull" })


}

async function getHealthProductsHandler(req, res) {

  const HealthProducts = await HealthProduct.find({})


  return res.status(200).send(HealthProducts)

}



async function addBeautyPickProductHandler(req, res) {
  const { imageUrl, name, price } = req.body
  const addBeautyPickProduct = await BeautyPickProduct.create({ imageUrl, name, price })

  return res.status(201).send({ msg: "HealthProducts added Successfull" })


}

async function getBeautyPickProductHandler(req, res) {

  const BeautyPickProducts = await BeautyPickProduct.find({})


  return res.status(200).send(BeautyPickProducts)

}

async function addDiscoverFashionProductsHandler(req, res) {
  const { imageUrl, name, price } = req.body
  const discoverFashionProducts = await DiscoverFashionProducts.create({ imageUrl, name, price })

  return res.status(201).send({ msg: "HealthProducts added Successfull" })


}

async function getDiscoverFashionProductsHandler(req, res) {

  const discoverFashionProducts = await DiscoverFashionProducts.find({})


  return res.status(200).send(discoverFashionProducts)

}

async function addFurnitureHandler(req, res) {
  const { imageUrl, name, price } = req.body
  const furniture = await Furniture.create({imageUrl, name, price })

  return res.status(201).send({ msg: "HealthProducts added Successfull" })


}

async function getFurnitureHandler(req, res) {

  const furniture = await Furniture.find({})


  return res.status(200).send(furniture)

}

async function addGroceryProductsHandler(req, res) {
  const { imageUrl, name, price } = req.body
  const groceryProducts = await GroceryProducts.create({ imageUrl, name, price })

  return res.status(201).send({ msg: "HealthProducts added Successfull" })


}

async function getGroceryProductsHandler(req, res) {

  const groceryProducts = await GroceryProducts.find({})


  return res.status(200).send(groceryProducts)

}

async function addPetCareProductsHandler(req, res) {
  const { imageUrl, name, price } = req.body
  const petCareProducts = await PetCareProducts.create({ imageUrl, name, price })

  return res.status(201).send({ msg: "HealthProducts added Successfull" })


}

async function getPetCareProductsHandler(req, res) {

  const petCareProducts = await PetCareProducts.find({})


  return res.status(200).send(petCareProducts)

}

async function addFitnessProductsHandler(req, res) {
  const { imageUrl, name, price } = req.body
  const fitnessProducts = await FitnessProducts.create({ imageUrl, name, price })

  return res.status(201).send({ msg: "HealthProducts added Successfull" })


}

async function getFitnessProductsHandler(req, res) {

  const fitnessProducts = await FitnessProducts.find({})


  return res.status(200).send(fitnessProducts)

}


async function addMenClothesHandler(req,res){
      const {imageUrl,name,price}=req.body
   const addMenClothes=  await MenCloth.create({
      imageUrl,name,price
    })

   return res.status(201).send({msg:"Men clothes added Successfull"})
}

async function getMenClothesHandler(req,res){
    
   const  menClothes=await MenCloth.find({})
  return  res.status(200).send(menClothes)
}

async function addWomenClothesHandler(req,res){
      const {imageUrl,name,price} =req.body
       const addWomenCloth=await WomenCloth.create({imageUrl,name,price})
       return res.status(201).send({msg:"Women clothes added Successfull"})
       
}

async function getWomenClothesHandler(req,res){
         const getWomenClothes=await WomenCloth.find({})
         return res.status(200).send(getWomenClothes)
}

async function addKidsClothHandler(req,res){
   const {imageUrl,name,price}=req.body
   const kidsCloths=await KidsCloth.create({imageUrl,name,price})
   return res.status(201).send({msg:"Kids clothes added Successfull"})
}
async function getKidsClothHandler(req,res){
   const getKidsCloth=await KidsCloth.find({})
   return res.status(200).send(getKidsCloth)
}

module.exports = {

  signUpHandler,
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
  getWomenClothesHandler,
  addKidsClothHandler,
  getKidsClothHandler
}