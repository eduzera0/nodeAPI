import express from "express";
import GeneroController from "../controllers/generosController.js";

const router = express.Router();

router
    .get('/generos', GeneroController.obterGeneros)
    .get('/generos/:id', GeneroController.obterGeneroPorId)
    .post('/generos', GeneroController.cadastrarGenero)
    .put('/generos/:id', GeneroController.atualizarGenero)
    .delete('/generos/:id', GeneroController.deletarGenero)

export default router;