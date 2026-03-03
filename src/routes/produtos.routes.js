import { Router } from "express";
import produtoController from "../controllers/produto.controller.js";
const produtoRoutes = Router();

produtoRoutes.post('/produtos', produtoController.criarProduto);
produtoRoutes.get("/produtos", produtoController.listarProdutos)
produtoRoutes.put("/produtos/:idProduto", produtoController.atualizarProduto);
produtoRoutes.delete("/produtos/:idCategoria", produtoController.deletarProduto);


export default produtoRoutes