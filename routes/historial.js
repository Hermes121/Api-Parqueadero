const { Router } = require('express');
const { crearHistorial, obtenerHistoriales, obtenerHistorialPorId, actualizarHistorial, eliminarHistorial } = require('../controllers/historial');

const router = Router();

router.post('/', crearHistorial); // Crear un nuevo historial
router.get('/', obtenerHistoriales); // Obtener todos los historiales
router.get('/:id', obtenerHistorialPorId); // Obtener un historial por ID
router.put('/:id', actualizarHistorial); // Actualizar un historial
router.delete('/:id', eliminarHistorial); // Eliminar un historial

module.exports = router;
