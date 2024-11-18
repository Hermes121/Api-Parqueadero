const Historial = require('../models/historial');

const crearHistorial = async (req, res) => {
    try {
        const historial = new Historial(req.body);
        await historial.save();
        res.status(201).json(historial);
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar el historial", error });
    }
};

const obtenerHistoriales = async (req, res) => {
    try {
        const historiales = await Historial.find()
            .populate('id_registro', 'id_vehiculo id_espacio id_usuario hora_entrada hora_salida');
        res.status(200).json(historiales);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener los historiales", error });
    }
};

const obtenerHistorialPorId = async (req, res) => {
    try {
        const historial = await Historial.findById(req.params.id)
            .populate('id_registro', 'id_vehiculo id_espacio id_usuario hora_entrada hora_salida');
        if (!historial) {
            return res.status(404).json({ msg: "Historial no encontrado" });
        }
        res.json(historial);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el historial", error });
    }
};

const actualizarHistorial = async (req, res) => {
    try {
        const historial = await Historial.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!historial) {
            return res.status(404).json({ msg: "Historial no encontrado" });
        }
        res.json(historial);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el historial", error });
    }
};

const eliminarHistorial = async (req, res) => {
    try {
        const historial = await Historial.findByIdAndDelete(req.params.id);
        if (!historial) {
            return res.status(404).json({ msg: "Historial no encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el historial", error });
    }
};

module.exports = {
    crearHistorial,
    obtenerHistoriales,
    obtenerHistorialPorId,
    actualizarHistorial,
    eliminarHistorial
};
