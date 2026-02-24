import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";
const produtoRoutes = Router();

produtoRoutes.post('/produtos', produtoController.criarProduto);
produtoRoutes.get("/produtos", produtoController.listarProdutos)
produtoRoutes.delete("/produtos/:idProduto", produtoController.deletarProduto);

export default produtoRoutes