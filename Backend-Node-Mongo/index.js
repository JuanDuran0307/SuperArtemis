import express  from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriasRouter from "./routes/categorias.routes.js";
import clientesRouter from "./routes/clientes.routes.js";
import empleadosRouter from "./routes/empleados.routes.js";
import cors from "cors";
const app = express();

dotenv.config();

const port  = process.env.PORT;


app.use(express.json());

conectarDB();
const corsOption = {
    methods: ["GET","POST","PATCH","DELETE"]
}

app.use(cors(corsOption));

app.listen(port, ()=>{
    console.log(`server was runnning on ${port}`);
})
app.use("/categoria", categoriasRouter);

app.use("/clientes", clientesRouter);
app.use("/empleados", empleadosRouter);