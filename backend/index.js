const cors=require("cors")
const mongoose=require("mongoose")
const express=require("express")
const app=express()
const port=5000
const userRouter =require("./routers/router")

mongoose.connect("mongodb://127.0.0.1:27017/ShopSwiftly-data")
.then(()=>{
    console.log("mongoose connected")
})
.catch((err)=>{
   console.log(err,"mongoose failed")
})

app.use(express.urlencoded({extended:false}))
app.use(express.json());
app.use(cors())

app.use("/",userRouter)

app.listen(port,()=>{
     console.log(`server started PORT:${port}`)
})
