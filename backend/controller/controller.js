const User=require("../model/user")
const Cloth=require("../model/addClothes")
const Electronic=require("../model/addElectronics")


async function  signUpHandler(req,res){
  
    const {  YourName,MobileNumber,Email,Password,ReEnterPassword}=req.body
    
    if(!req.body||
        !YourName||
        !MobileNumber||
        !Email||
        !Password||
        !ReEnterPassword
        ){
            return res.status(404).json({msg:"all faild required"})
        }
    await   User.create({YourName,MobileNumber,Email,Password,ReEnterPassword})

    return res.status(201).json({msg:"user created successfull"})
}

async function signInHandler(req,res){
      const {Email,Password}=req.body
      const checkUser=await User.findOne({Email})
      console.log(checkUser)
      if(checkUser){
        if(Password === checkUser.Password){
           res.send({data:{
            msg:"Login Successfully",
            checkUser
           }})
        }else{
          res.send({msg:"Password didn't match"})
        }
      }else{
        res.status(404).send({msg:"Invalid Credentials"});
      }
   
}

async function addClothesHandler(req,res){
    
     const {imageUrl,name,price}=req.body

     const clothesData=await Cloth.create({imageUrl,name,price})
     
     return res.status(201).send({msg:"Cloth added Successfully"})

}
async function getClothesHandler(req,res){
    
  const clothesData=await Cloth.find({})
  console.log(clothesData)

 return res.status(201).send(clothesData)

}

async function addElectronicsHandler(req,res){
     const {imageUrl,name,price} =req.body
     const addElectronics= await Electronic.create({imageUrl,name,price})

     return res.status(201).send({msg:"Electronics added Successfull"})


}

async function getElectronicsHandler(req,res){
    
  const ElectronicsData=await Electronic.find({})
  

 return res.status(201).send(ElectronicsData)

}




module.exports={
    
    signUpHandler,
    signInHandler,
    addClothesHandler,
    getClothesHandler,
    addElectronicsHandler,
    getElectronicsHandler
}