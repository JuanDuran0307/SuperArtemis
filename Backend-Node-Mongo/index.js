import express  from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";

const app = express();

dotenv.config();

app.use("/categoria", categoriasRouter);

const port  = process.env.PORT;


conectarDB();

app.listen(port, ()=>{
    console.log(`server was runnning on ${port}`);
})