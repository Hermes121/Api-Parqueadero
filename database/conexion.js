const mongoose = require("mongoose");

const conexion = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Conexión satisfactoria!");
    } catch (e) {
        console.log("Error al conectarse a MongoDB:", e);
        throw new Error("Error al conectar");
    }
}

module.exports = { conexion };
