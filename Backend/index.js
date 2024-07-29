import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from './route/book.route.js';
import userRoute from './route/user.router.js';

const app = express();
 app.use(cors());

dotenv.config();
const PORT = process.env.PORT||4000;
const URI = process.env.MongoDBURI;


//Connect to mongodb
try{
 mongoose.connect(URI,{
  // useNewUrlParser: true,
  // useUnifiedTopology: true
 });
 console.log("Connected to Mongodb");
}catch(error){
  console.log("error:", error);
}
app.use("/book", bookRoute)
app.use(express.json());
app.use('/user', userRoute)
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}) 