const mongoose=require('mongoose')
const  userSchema=new mongoose.Schema(
    {
        phone:
        {
            type:Number,
            required:true,
         },
        name:
        {
            type:String,
            required:true,
            trim:true
        },
        email:
        {
            type:String,
            required:true,
            trim:true
        }
    }
)

module.exports=mongoose.model('users',userSchema)