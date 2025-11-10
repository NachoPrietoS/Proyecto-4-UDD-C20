import { reservas } from '../data/reservasData.js';
import { reserva } from '../models/reservaModelo.js';


const buscarReservaPorId = (id) => reservas.find(r => r.id == id);


export const crearReserva = (req, res) => {
    try {
        const { hotel, tipoHabitacion, numHuespedes, fechaInicio, fechaFin, estadoDePago } = req.body;

        if (!hotel || !tipoHabitacion || !numHuespedes || !fechaInicio || !fechaFin || !estadoDePago) {
            return res.status(400).json({ mensaje: "Todos los campos son obligatorios" });
        }

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
        const reservaEncontrada = buscarReservaPorId(req.params.id);
        if (!reservaEncontrada) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        res.json(reservaEncontrada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener reserva', error });
    }
};


export const eliminarReserva = (req, res) => {
    try {
        const index = reservas.findIndex(reservaBuscada => reservaBuscada.id == req.params.id);
        if (index === -1) return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        reservas.splice(index, 1);
        res.json({ mensaje: 'Reserva eliminada' });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar la reserva', error });
    }
};


export const actualizarReserva = (req, res) => {
    try {
        const reservaEncontrada = buscarReservaPorId(req.params.id);
        if (!reservaEncontrada) {
        return res.status(404).json({ mensaje: 'Reserva no encontrada' });
        }

        // Actualiza solo los campos enviados en el body
        Object.assign(reservaEncontrada, req.body);

        res.json(reservaEncontrada);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar la reserva', error });
    }
};


export const obtenerReservas = (req, res) => {
    try {
        let resultado = reservas;
        const { hotel, fecha_inicio, fecha_fin, tipo_habitacion, estadoDePago, num_huespedes } = req.query;

        if (hotel) resultado = resultado.filter(r => r.hotel.toLowerCase().includes(hotel.toLowerCase()));
        if (fecha_inicio && fecha_fin) resultado = resultado.filter(r => r.fechaInicio >= fecha_inicio && r.fechaFin <= fecha_fin);
        if (tipo_habitacion) resultado = resultado.filter(r => r.tipoHabitacion.toLowerCase() === tipo_habitacion.toLowerCase());
        if (estadoDePago) resultado = resultado.filter(r => r.estadoDePago.toLowerCase() === estadoDePago.toLowerCase());
        if (num_huespedes) resultado = resultado.filter(r => r.numHuespedes == num_huespedes);

        if (resultado.length === 0) {
            return res.status(404).json({ mensaje: 'No se encontraron reservas con los filtros aplicados' });
        }

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener reservas', error });
    }
};
