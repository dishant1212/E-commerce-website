const mongoose=require("mongoose")

const KidsClothesSchema=new mongoose.Schema({
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

const KidsCloths=mongoose.model("kidsCloth",KidsClothesSchema)

module.exports=KidsCloths