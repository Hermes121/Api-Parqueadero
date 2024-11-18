const EntradaSalida = require('../models/entrada_salida');

const crearEntradaSalida = async (req, res) => {
    try {
        const entradaSalida = new EntradaSalida(req.body);
        await entradaSalida.save();
        res.status(201).json(entradaSalida);
    } catch (error) {
        res.status(500).json({ msg: "Error al registrar la entrada/salida", error });
    }
};

const obtenerRegistros = async (req, res) => {
    try {
        const registros = await EntradaSalida.find()
            .populate('id_vehiculo', 'tipo id_tarifa') // Relaciona con Vehículo
            .populate('id_espacio', 'tipo_vehiculo estado') // Relaciona con Espacio
            .populate('id_usuario', 'nombre_usuario correo'); // Relaciona con Usuario
        res.status(200).json(registros);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener los registros", error });
    }
};

const obtenerRegistroPorId = async (req, res) => {
    try {
        const registro = await EntradaSalida.findById(req.params.id)
            .populate('id_vehiculo', 'tipo id_tarifa')
            .populate('id_espacio', 'tipo_vehiculo estado')
            .populate('id_usuario', 'nombre_usuario correo');
        if (!registro) {
            return res.status(404).json({ msg: "Registro no encontrado" });
        }
        res.json(registro);
    } catch (error) {
        res.status(500).json({ msg: "Error al obtener el registro", error });
    }
};

const actualizarRegistro = async (req, res) => {
    try {
        const registro = await EntradaSalida.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!registro) {
            return res.status(404).json({ msg: "Registro no encontrado" });
        }
        res.json(registro);
    } catch (error) {
        res.status(500).json({ msg: "Error al actualizar el registro", error });
    }
};

const eliminarRegistro = async (req, res) => {
    try {
        const registro = await EntradaSalida.findByIdAndDelete(req.params.id);
        if (!registro) {
            return res.status(404).json({ msg: "Registro no encontrado" });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ msg: "Error al eliminar el registro", error });
    }
};

module.exports = {
    crearEntradaSalida,
    obtenerRegistros,
    obtenerRegistroPorId,
    actualizarRegistro,
    eliminarRegistro
};
