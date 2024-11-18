const { Schema, model } = require('mongoose');

const HistorialSchema = new Schema({
    id_registro: {
        type: Schema.Types.ObjectId,
        ref: 'EntradaSalida',
        required: [true, "El ID del registro es requerido"]
    },
    fecha: {
        type: Date,
        default: new Date()
    },
    accion: {
        type: String,
        enum: ['entrada', 'salida'],
        required: [true, "La acción es requerida"]
    }
});

module.exports = model('Historial', HistorialSchema);
