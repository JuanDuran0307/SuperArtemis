import express from "express";



const router = express.Router();

import {obtenerCategoria,obtenerCategorias, agregarCategorias,borrarCategorias, actualizarCategorias} from "../controllers/categoria.controller.js";
router.get("/one/:id", obtenerCategoria)
router.get("/all", obtenerCategorias);
router.post("/add", agregarCategorias);
router.delete("/del/:id", borrarCategorias);
router.patch("/upd/:id", actualizarCategorias);
export default router;
