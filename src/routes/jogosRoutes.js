import express from "express";
import JogoController from "../controllers/jogosController.js";

const router = express.Router();

router
    .get('/jogos', JogoController.obterJogos)
    .get('/jogos/:id', JogoController.obterJogoPorId)
    .post('/jogos', JogoController.cadastrarJogo)
    .put('/jogos/:id', JogoController.atualizarJogo)
    .delete('/jogos/:id', JogoController.deletarJogo)

export default router;