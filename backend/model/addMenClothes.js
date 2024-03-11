const mongoose=require("mongoose")

const MenClothesSchema=new mongoose.Schema({
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

const MenClothes=mongoose.model("Mencloth",MenClothesSchema)

module.exports=MenClothes