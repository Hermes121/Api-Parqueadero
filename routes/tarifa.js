const { Router } = require('express');
const { crearTarifa, obtenerTarifas, obtenerTarifaPorId, actualizarTarifa, eliminarTarifa } = require('../controllers/tarifa');

const router = Router();

router.post('/', crearTarifa);
router.get('/', obtenerTarifas);
router.get('/:id', obtenerTarifaPorId);
router.put('/:id', actualizarTarifa);
router.delete('/:id', eliminarTarifa);

module.exports = router;
