const { Schema, model } = require('mongoose');

const EntradaSalidaSchema = new Schema({
    id_vehiculo: {
        type: Schema.Types.ObjectId,
        ref: 'Vehiculo',
        required: [true, "El ID del vehículo es requerido"]
    },
    id_espacio: {
        type: Schema.Types.ObjectId,
        ref: 'Espacio',
        required: [true, "El ID del espacio es requerido"]
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, "El ID del usuario es requerido"]
    },
    hora_entrada: {
        type: Date,
        required: [true, "La hora de entrada es requerida"]
    },
    hora_salida: {
        type: Date
    },
    costo: {
        type: Number,
        default: 0
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

module.exports = model('EntradaSalida', EntradaSalidaSchema);
