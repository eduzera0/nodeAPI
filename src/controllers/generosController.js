import generos from "../models/Genero.js";

class GeneroController {

    static obterGeneros = (req, res) => {
        generos.find((err, generos) => {
        res.status(200).json(generos)
        })  
    }

    static obterGeneroPorId = (req, res) => {
        const id = req.params.id

        generos.findById(id, (err, generos) => {
            if (err) {
                res.status(400).send({message: `${err} - ID não encontrado.`})
            } else {
                res.status(200).send(generos);
            }
        })
    }

    static cadastrarGenero = (req, res) => {
        let genero = new generos(req.body);

        genero.save((err) => {

            if(err) {
                res.status(500).send({message: `${err} - falha ao cadastrar genero.`})
            } else {
                res.status(201).send(genero.toJSON())
            }
        })
    }

    static atualizarGenero = (req, res) => {
        const id = req.params.id;

        generos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: "Genero atualizado com sucesso!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarGenero = (req, res) => {
        const id = req.params.id;

        generos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Genero deletado com sucesso!"})
            } else {
                res.status(500).send({message: `${err} - falha ao deletar genero`})
            }
        })
    }


}

export default GeneroController;