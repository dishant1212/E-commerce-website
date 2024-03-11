const mongoose=require("mongoose")

const FurnitureSchema=new mongoose.Schema({
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

const Furniture=mongoose.model("Furniture",FurnitureSchema)

module.exports=Furniture