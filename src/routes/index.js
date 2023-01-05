import express from "express";
import jogos from "./jogosRoutes.js";
import generos from "./generosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Página Principal"})
    })

    app.use(
        express.json(),
        jogos,
        generos
    )
}

export default routes;
