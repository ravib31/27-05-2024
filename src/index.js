// require ("dotenv").config({path:"./env"})
import dotenv from "dotenv"
import connectedDB from "./db/index.js";
dotenv.config({
    path:"./env"
})



connectedDB()















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