const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")


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



UserSchema.pre("save",async function(next){
  
    if(!this.isModified("Password")){
       this.Password=await bcrypt.hash(this.Password,12);
       this.ReEnterPassword=await bcrypt.hash(this.ReEnterPassword,12)
    }
  next()
})



const User=mongoose.model("user",UserSchema)

module.exports=User