const mongoose=require("mongoose")

const ElectronicsSchema=new mongoose.Schema({
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

const Electronics=mongoose.model("Electronic",ElectronicsSchema)

module.exports=Electronics