const Vehiculo = require('../models/vehiculo');

const crearVehiculo = async (req, res) => {
    try {
        const vehiculo = new Vehiculo(req.body);
        await vehiculo.save();
        res.status(201).json(vehiculo);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear el vehículo", error });
    }
};

const obtenerVehiculos = async (req, res) => {
    try {
        const vehiculos = await Vehiculo.find().populate('id_tarifa', 'tipo_vehiculo tarifa_por_hora');
        res.status(200).json(vehiculos);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener los vehículos", error });
    }
};

const obtenerVehiculoPorId = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findById(req.params.id).populate('id_tarifa', 'tipo_vehiculo tarifa_por_hora');
        if (!vehiculo) {
            return res.status(404).json({ msg: "Vehículo no encontrado" });
        }
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el vehículo", error });
    }
};

const actualizarVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!vehiculo) {
            return res.status(404).json({ msg: "Vehículo no encontrado" });
        }
        res.json(vehiculo);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el vehículo", error });
    }
};

const eliminarVehiculo = async (req, res) => {
    try {
        const vehiculo = await Vehiculo.findByIdAndDelete(req.params.id);
        if (!vehiculo) {
            return res.status(404).json({ msg: "Vehículo no encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el vehículo", error });
    }
};

module.exports = {
    crearVehiculo,
    obtenerVehiculos,
    obtenerVehiculoPorId,
    actualizarVehiculo,
    eliminarVehiculo
};
