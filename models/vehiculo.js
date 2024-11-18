const { Schema, model } = require('mongoose');

const VehiculoSchema = new Schema({
    id_tarifa: {
        type: Schema.Types.ObjectId,
        ref: 'Tarifa',
        required: [true, "El id_tarifa es requerido"]
    },
    tipo: {
        type: String,
        enum: ['Moto', 'Carro', 'Camion'],
        required: [true, "El tipo de vehículo es requerido"]
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

module.exports = model('Vehiculo', VehiculoSchema);
