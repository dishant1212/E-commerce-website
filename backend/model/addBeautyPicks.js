const mongoose=require("mongoose")

const BeautyPicksSchema=new mongoose.Schema({
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

const BeautyPicksProducts=mongoose.model("BeautyPicksProduct",BeautyPicksSchema)

module.exports=BeautyPicksProducts