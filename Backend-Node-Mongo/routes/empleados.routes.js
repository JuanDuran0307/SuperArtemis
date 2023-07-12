import express from "express";

const empleadosRouter = express.Router();

import{obtenerEmpleados,agregarEmpleado,borrarEmpleado,actualizarEmpleados} from "../controllers/empleados.controller.js";

empleadosRouter.get("/all",obtenerEmpleados);
empleadosRouter.post("/add", agregarEmpleado);
empleadosRouter.delete("/del",borrarEmpleado);
empleadosRouter.patch("/upt", actualizarEmpleados);

export default empleadosRouter;