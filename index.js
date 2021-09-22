require ('dotenv').config()
const express = require('express')
const app=express()
const mongoose=require('mongoose')
const users = require('./userModel')
app.use(express.json())

// app.post('/mentor',async(req,res) =>{    
// try{
//     let client= await MongoClient.connect(dbUrl);    
//     let db=client.db("admin")
//     const data=db.collection("users").insertOne(req.body);
//     client.close()
//     //console.log(req.body)
//     res.status(200).json({message:"Record Created"})
// }
// catch(err)
// {
//     console.log(err)
//     res.status(200).json({message:"Something went Wrong"})
// }    //console.log(data)
// })



//Mentor API 
// app.get('/mentor', (req, res) => {
//     res.status(200).json(mentor);
// });

// //Multiple students added to Mentor API
// app.post('/mentor', (req, res) =>{
//     const mentor = [{
//        name:req.body.name
//     }];
//     student.push(mentor)
//     res.status(200).json({Message:"Students added"})
// })


// const mentor=[
//     {"id":1,"name":"Sandy"},
//     {"id":2,"name":"Ganesh"}
// ]

const URI=process.env.MONGODB_URL
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    },err=>
 {
        if(err)
        throw err;
        console.log("connect to mongodb")
    })

app.use('/mentor',require('./userRouter'))
//app.use('/student',require('./userRouter'))
const PORT = process.env.PORT || 5000
    app.listen(PORT,()=>
    {
        console.log("Server  Listening")
    })