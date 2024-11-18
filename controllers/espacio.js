const Espacio = require('../models/espacio');

const crearEspacio = async (req, res) => {
    try {
        const espacio = new Espacio(req.body);
        await espacio.save();
        res.status(201).json(espacio);
    } catch (error) {
        res.status(500).json({ msg: "Error al crear el espacio", error });
    }
};

const obtenerEspacios = async (req, res) => {
    try {
        const espacios = await Espacio.find();
        res.status(200).json(espacios);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener los espacios", error });
    }
};

const obtenerEspacioPorId = async (req, res) => {
    try {
        const espacio = await Espacio.findById(req.params.id);
        if (!espacio) {
            return res.status(404).json({ msg: "Espacio no encontrado" });
        }
        res.json(espacio);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el espacio", error });
    }
};

const actualizarEspacio = async (req, res) => {
    try {
        const espacio = await Espacio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!espacio) {
            return res.status(404).json({ msg: "Espacio no encontrado" });
        }
        res.json(espacio);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el espacio", error });
    }
};

const eliminarEspacio = async (req, res) => {
    try {
        const espacio = await Espacio.findByIdAndDelete(req.params.id);
        if (!espacio) {
            return res.status(404).json({ msg: "Espacio no encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el espacio", error });
    }
};

module.exports = {
    crearEspacio,
    obtenerEspacios,
    obtenerEspacioPorId,
    actualizarEspacio,
    eliminarEspacio
};
