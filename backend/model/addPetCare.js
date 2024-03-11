
const mongoose=require("mongoose")

const PetCareProductsSchema=new mongoose.Schema({
    imageUrl:{
        type:String,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    price: {
        type:Number,
        require:true
    }
})

const  PetCareProducts=mongoose.model("PetCareProduct",PetCareProductsSchema)

module.exports=PetCareProducts