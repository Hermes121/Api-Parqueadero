const { Router } = require('express');
const { crearVehiculo, obtenerVehiculos, obtenerVehiculoPorId, actualizarVehiculo, eliminarVehiculo } = require('../controllers/vehiculo');

const router = Router();

router.post('/', crearVehiculo);
router.get('/', obtenerVehiculos);
router.get('/:id', obtenerVehiculoPorId);
router.put('/:id', actualizarVehiculo);
router.delete('/:id', eliminarVehiculo);

module.exports = router;
