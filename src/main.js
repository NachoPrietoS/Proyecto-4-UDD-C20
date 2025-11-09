import express from 'express'
import { env } from './config/env.config.js'
import reservasRoutes from './routers/reservasRouters.js';


const app = express();
app.use(express.json());

// Rutas
app.use('/api', reservasRoutes);

// Variables de entorno
const { port } = env;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
