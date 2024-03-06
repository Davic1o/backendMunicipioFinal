const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const userController = require('./controller/dataUserController');
const datauserRoutes = require('./routes/dataUserRoute');
const horarioRoutes = require('./routes/horarioRoute');
const rondaRoutes = require('./routes/rondaRoute');
const sectorRoutes = require('./routes/sectorRoute');


const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3001', // Especifica tu origen permitido
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());

// Conectarse a MongoDB
connectDB();
userController.createDefaultUser();

// Usar las rutas
app.use('/api', datauserRoutes);
app.use('/api', horarioRoutes);
app.use('/api', rondaRoutes);
app.use('/api', sectorRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
