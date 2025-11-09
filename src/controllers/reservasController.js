import { reservas } from '../../data/reservasData.js';
import { reserva } from '../models/reservaModelo.js';


export const crearReserva = (req, res) => {
    try {
        const { hotel, tipoHabitacion, numHuespedes, fechaInicio, fechaFin, estadoDePago } = req.body;
        const id = reservas.length + 1;
        const nuevaReserva = new reserva(id, hotel, tipoHabitacion, numHuespedes, fechaInicio, fechaFin, estadoDePago);
        reservas.push(nuevaReserva);
        res.status(201).json(nuevaReserva);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear la reserva', error });
    }
};


export const obtenerReservaPorId = (req, res) => {
    try {
        const reserva = reservas.find(reservaBuscada => reservaBuscada.id == req.params.id);
        if (!reserva) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        res.json(reserva);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error interno', error });
    }
};


export const eliminarReserva = (req, res) => {
    try {
        const index = reservas.findIndex(reservaItem => reservaItem.id == req.params.id);
        if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        reservas.splice(index, 1);
        res.json({ mensaje: 'Reserva eliminada' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la reserva', error });
    }
};
