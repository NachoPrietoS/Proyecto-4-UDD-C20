
# Proyecto 4 - Reservas Hoteleras

Gestion de reservas de hotel con Node.js y Express.
De acuerdo con lo solicitado genero API para Crear, Leer, Actualizar y eliminar y busqueda con filtros. 
Dado la complejidad del proyecto se utilizo IA de apoyo para resolucion de dudas y coreccion de funciones que no entendia como crear.

## Endpoints generados

Metodo - Endpoint - Descripcion
POST - /api/reservas - Crear una reserva
GET - /api/reservas - Obtener todas las reservas
GET - /api/reservas/:id - Obtener una reserva por ID
PUT - /api/reservas/:id - Actualizar una reserva
DELETE - /api/reservas/:id - Eliminar una reserva

### Filtros disponible para busqueda

- Hotel
- Fecha inicio y fecha fin
- tipo de Habitacion
- Estado de pago
- Numero de Huespedes

## Clase Reserva

Esta clase creada utiliza los siguientes datos
- ID
- Hotel
- Tipo Habitacion
- Numero de Huespedes
- Fecha de inicio
- Fecha de fin
- Estado de pago

## Ejemplo de json para crear reserva

{
  "hotel": "Hotel Paraíso",
  "tipoHabitacion": "suite",
  "numHuespedes": 3,
  "fechaInicio": "2023-12-20",
  "fechaFin": "2023-12-25",
  "estadoDePago": "pendiente"
}

## Ejecucion de servidor

Comando: npm run start:dev

## Almacenamiento de datos

Dentro de SRC genero el directorio data y en su interior creo el archivo reservasData.js para almaecnar las reservas creadas.