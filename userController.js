const users = require('./userModel')
const userController={
    assign:async (req,res) =>
    {
        try
        {
            const {name,email,phone} = req.body
            const user = await users.findOne({name})
             if(user) 
            {
                return res.status(400).json({msg:"This student  already exits in mentor"})
            }
            const newUsers= new users({
                name,email,phone
            })
            //Save into MONGODB
        await newUsers.save()
        res.json({msg:"created successful"})
}
catch(err)
        {
        return res.status(500).json({msg:err.message})
        }
},
updateController :async(req,res) =>
    {
     try{
         const {name} = req.body
        await users.findOneAndUpdate({_id:req.params.id},{name})
        res.json({msg:'Mentor  updated'})
        }
        catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
showAll:async(req,res) =>
{
    try
    {
        const student = await users.find({_id:req.name.id})
        res.json(student)
    }catch(err)
    {
        res.status(500).json({msg:err.msg})
    }
}
}



module.exports = userController