const { Schema, model } = require('mongoose');

const TarifaSchema = new Schema({
    tipo_vehiculo: {
        type: String,
        enum: ['Moto', 'Carro', 'Camion'],
        required: [true, "El tipo de vehículo es requerido"]
    },
    tarifa_por_hora: {
        type: Number,
        required: [true, "La tarifa por hora es requerida"]
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

module.exports = model('Tarifa', TarifaSchema);
