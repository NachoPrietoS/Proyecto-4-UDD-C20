
import express from 'express';
import { crearReserva, obtenerReservaPorId, eliminarReserva } from '../controllers/reservasController.js';

const router = express.Router();

router.post('/reservas', crearReserva);
router.get('/reservas/:id', obtenerReservaPorId);
router.delete('/reservas/:id', eliminarReserva);
// router.get('/reservas', obtenerReservas);
// router.put('/reservas/:id', actualizarReserva);


export default router;