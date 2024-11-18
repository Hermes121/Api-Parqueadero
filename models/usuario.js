const { Schema, model } = require('mongoose');

const UsuarioSchema = new Schema({
    nombre_usuario: {
        type: String,
        required: [true, "El nombre de usuario es requerido"]
    },
    correo: {
        type: String,
        required: [true, "El correo es requerido"],
        unique: true
    },
    contraseña: {
        type: String,
        required: [true, "La contraseña es requerida"]
    },
    rol: {
        type: String,
        enum: ['Operador', 'Administrador'],
        required: [true, "El rol es requerido"]
    },
    fecha_creacion: {
        type: Date,
        default: new Date()
    },
    fecha_actualizacion: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('Usuario', UsuarioSchema);
