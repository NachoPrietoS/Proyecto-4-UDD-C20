import express from 'express'
import { env } from './config/env.config.js'

const app = express();
const { port, isProd } = env 


app.listen(port, () => {
    console.log(`Servidor corriendo en el ${port}`)
})

