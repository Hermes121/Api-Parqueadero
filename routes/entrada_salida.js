const { Router } = require('express');
const { crearEntradaSalida, obtenerRegistros, obtenerRegistroPorId, actualizarRegistro, eliminarRegistro } = require('../controllers/entrada_salida');

const router = Router();

router.post('/', crearEntradaSalida); 
router.get('/', obtenerRegistros); 
router.get('/:id', obtenerRegistroPorId); 
router.put('/:id', actualizarRegistro); 
router.delete('/:id', eliminarRegistro);

module.exports = router;
