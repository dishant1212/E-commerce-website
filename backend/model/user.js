const mongoose=require("mongoose")

const UserSchema= new mongoose.Schema({
          YourName:{
            type:String,
            required:true,
          },
          MobileNumber:{
            type:Number,
            required:true,
          },
          Email:{
            type:String,
            required:true,
            unique:true
          },
          Password:{
            type:String,
            required:true,

          },
          ReEnterPassword:{
            type:String,
            required:true,
          }
 
})

const User=mongoose.model("user",UserSchema)

module.exports=User
