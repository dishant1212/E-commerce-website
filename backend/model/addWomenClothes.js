const mongoose=require("mongoose")

const womenClothesSlice=new mongoose.Schema({
     imageUrl:{
        type:String,
        require:true,
     },
     name:{
        type:String,
        require:true
     },
     price:{
        type:Number,
        require:true

     }
})

const WomenClothes=mongoose.model("WomenCloth",womenClothesSlice)

module.exports=WomenClothes
