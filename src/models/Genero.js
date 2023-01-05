import mongoose from "mongoose";

const generoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true}
    },
    {
        versionKey: false
    }
)

const generos = mongoose.model("generos", generoSchema)

export default generos;