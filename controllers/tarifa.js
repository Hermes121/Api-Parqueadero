const Tarifa = require('../models/tarifa');

const crearTarifa = async (req, res) => {
    try {
        const tarifa = new Tarifa(req.body);
        await tarifa.save();
        res.status(201).json(tarifa);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear la tarifa", error });
    }
};

const obtenerTarifas = async (req, res) => {
    try {
        const tarifas = await Tarifa.find();
        res.status(200).json(tarifas);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener las tarifas", error });
    }
};

const obtenerTarifaPorId = async (req, res) => {
    try {
        const tarifa = await Tarifa.findById(req.params.id);
        if (!tarifa) {
            return res.status(404).json({ msg: "Tarifa no encontrada" });
        }
        res.json(tarifa);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener la tarifa", error });
    }
};

const actualizarTarifa = async (req, res) => {
    try {
        const tarifa = await Tarifa.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tarifa) {
            return res.status(404).json({ msg: "Tarifa no encontrada" });
        }
        res.json(tarifa);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar la tarifa", error });
    }
};

const eliminarTarifa = async (req, res) => {
    try {
        const tarifa = await Tarifa.findByIdAndDelete(req.params.id);
        if (!tarifa) {
            return res.status(404).json({ msg: "Tarifa no encontrada" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar la tarifa", error });
    }
};

module.exports = {
    crearTarifa,
    obtenerTarifas,
    obtenerTarifaPorId,
    actualizarTarifa,
    eliminarTarifa
};
