const { Router } = require('express');
const { crearEspacio, obtenerEspacios, obtenerEspacioPorId, actualizarEspacio, eliminarEspacio } = require('../controllers/espacio');

const router = Router();

router.post('/', crearEspacio); // Crear un nuevo espacio
router.get('/', obtenerEspacios); // Obtener todos los espacios
router.get('/:id', obtenerEspacioPorId); // Obtener un espacio por ID
router.put('/:id', actualizarEspacio); // Actualizar un espacio
router.delete('/:id', eliminarEspacio); // Eliminar un espacio

module.exports = router;
