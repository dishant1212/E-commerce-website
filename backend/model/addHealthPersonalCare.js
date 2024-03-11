
const mongoose=require("mongoose")

const HealthSchema=new mongoose.Schema({
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

const  HealthProducts=mongoose.model("healthProduct",HealthSchema)

module.exports=HealthProducts