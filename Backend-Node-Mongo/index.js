import express  from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";

const app = express();

dotenv.config();

const port  = process.env.PORT;


conectarDB();

app.listen(port, ()=>{
    console.log(`server was runnning on ${port}`);
})