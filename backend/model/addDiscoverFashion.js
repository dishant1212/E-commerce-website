const mongoose=require("mongoose")


const DiscoverFashionSchema=new mongoose.Schema({
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

const DiscoverFashionProducts=mongoose.model("DiscoverFashionProduct",DiscoverFashionSchema)


module.exports=DiscoverFashionProducts