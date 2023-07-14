import express from "express";

const clientesRouter = express.Router();

import {obtenerClientes,agregarCliente,borrarCliente,actualizarClientes} from "../controllers/clientes.controller.js";

clientesRouter.get("/all",obtenerClientes);
clientesRouter.post("/add",agregarCliente );
clientesRouter.delete("/del/:id",borrarCliente);
clientesRouter.patch("/upt/:id",actualizarClientes)
export default clientesRouter;