export class reserva {
    constructor(id, hotel, tipoHabitacion, numHuespedes, fechaInicio, fechaFin, estadoDePago){
        this.id = id;
        this.hotel = hotel;
        this.tipoHabitacion = tipoHabitacion; // individual, doble, trilpe, familiar, suite, deluxe
        this.numHuespedes = numHuespedes;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.estadoDePago = estadoDePago; // confirmada, pendiente, cancelada
    }
}