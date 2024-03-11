const mongoose=require("mongoose")

const GrocerySchema=new mongoose.Schema({
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

const GroceryProducts=mongoose.model("GroceryProduct",GrocerySchema)

module.exports=GroceryProducts