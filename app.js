const express = require("express");
const app = express();
const usuarioRoutes = require('./routes/usuario');
const tarifaRoutes = require('./routes/tarifa');
const vehiculoRoutes = require('./routes/vehiculo');
const espacioRoutes = require('./routes/espacio'); 
const entradaSalidaRoutes = require('./routes/entrada_salida');
const historialRoutes = require('./routes/historial');

app.use(express.json());
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/tarifas', tarifaRoutes);
app.use('/api/vehiculos', vehiculoRoutes);
app.use('/api/espacios', espacioRoutes);
app.use('/api/entradas_salidas', entradaSalidaRoutes);
app.use('/api/historial', historialRoutes);

module.exports = app;
