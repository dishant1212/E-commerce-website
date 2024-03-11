const mongoose=require("mongoose")


const ClothesSchema=new mongoose.Schema({
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

const Clothes=mongoose.model("cloth",ClothesSchema)


module.exports=Clothes