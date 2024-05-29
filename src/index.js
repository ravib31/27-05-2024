// require ("dotenv").config({path:"./env"})
import dotenv from "dotenv"
import { app } from "./app.js";
import connectedDB from "./db/index.js";
dotenv.config({
    path:"./env"
})



connectedDB()
.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Hye buddy !! Server is running on port : ${process.env.PORT}` )
    } )
})
.catch((err)=>{
    console.log("Connection failed" ,err)
})















// import express from "express";
// const app = express();
// (async()=>{
//     try{ 
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("Error:",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is running on port ${process.env.PORT}`);
//         })
//     }
//     catch(err){
//         console.log("Error:",err);
//         throw err
//     }           
// })()