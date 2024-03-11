const mongoose=require("mongoose")

const FitnessSchema=new mongoose.Schema({
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

const Fitness=mongoose.model("FitnessProduct",FitnessSchema)

module.exports=Fitness