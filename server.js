const app = require('./app');
const { conexion } = require('./database/conexion');
require('dotenv').config();

// Conexión a la base de datos
conexion();

// Usar el puerto proporcionado por Render o el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});
