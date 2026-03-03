import { Router } from "express";
import categoriaController from "../controllers/categoria.controller.js";
const categoriaRoutes = Router();

categoriaRoutes.post('/categorias', categoriaController.criarCategoria);
categoriaRoutes.get('/categorias', categoriaController.listarCategorias);
categoriaRoutes.put('/categorias/:idCategoria', categoriaController.atualizarCategoria);
categoriaRoutes.delete('/categorias/:idCategoria', categoriaController.deletarCategoria);

export default categoriaRoutes