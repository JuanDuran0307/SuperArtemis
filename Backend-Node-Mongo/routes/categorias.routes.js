import express from "express";



const categoriasRouter = express.Router();

import {obtenerCategoria,obtenerCategorias,agregarCategorias,borrarCategorias, actualizarCategorias} from "../controllers/categoria.controller.js";
categoriasRouter.get("/one/:id", obtenerCategoria)
categoriasRouter.get("/all", obtenerCategorias);
categoriasRouter.post("/add", agregarCategorias);
categoriasRouter.delete("/del/:id", borrarCategorias);
categoriasRouter.patch("/upd/:id", actualizarCategorias);

export default categoriasRouter;
