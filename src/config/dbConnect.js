import mongoose from "mongoose";

mongoose.connect("mongodb+srv://eduardodb:123@nodeapi.6hsokzd.mongodb.net/curso_node");

let db = mongoose.connection;

export default db;