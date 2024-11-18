const { Schema, model } = require('mongoose');

const EspacioSchema = new Schema({
    tipo_vehiculo: {
        type: String,
        enum: ['Carro', 'Moto', 'Camion'],
        required: [true, "El tipo de vehículo es requerido"]
    },
    estado: {
        type: String,
        enum: ['Disponible', 'Ocupado'],
        default: 'Disponible'
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

module.exports = model('Espacio', EspacioSchema);
