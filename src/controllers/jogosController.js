import jogos from "../models/Jogo.js";

class JogoController {

    static obterJogos = (req, res) => {
        jogos.find()
        .populate('genero')
        .exec((err, jogos) => {
        res.status(200).json(jogos)
        })  
    }

    static obterJogoPorId = (req, res) => {
        const id = req.params.id

        jogos.findById(id)
            .populate('genero')
            .exec((err, jogos) => {
            if (err) {
                res.status(400).send({message: `${err} - ID não encontrado.`})
            } else {
                res.status(200).send(jogos);
            }
        })
    }

    static cadastrarJogo = (req, res) => {
        let jogo = new jogos(req.body);

        jogo.save((err) => {

            if(err) {
                res.status(500).send({message: `${err} - falha ao cadastrar jogo.`})
            } else {
                res.status(201).send(jogo.toJSON())
            }
        })
    }

    static atualizarJogo = (req, res) => {
        const id = req.params.id;

        jogos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: "Jogo atualizado com sucesso!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static deletarJogo = (req, res) => {
        const id = req.params.id;

        jogos.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: "Jogo deletado com sucesso!"})
            } else {
                res.status(500).send({message: `${err} - falha ao deletar jogo`})
            }
        })
    }


}

export default JogoController;