
import express from 'express';
import { crearReserva, obtenerReservaPorId, eliminarReserva, actualizarReserva, obtenerReservas } from '../controllers/reservasController.js';

const router = express.Router();

router.post('/reservas', crearReserva);
router.get('/reservas/:id', obtenerReservaPorId);
router.delete('/reservas/:id', eliminarReserva);
router.put('/reservas/:id', actualizarReserva);
router.get('/reservas', obtenerReservas);


export default router;