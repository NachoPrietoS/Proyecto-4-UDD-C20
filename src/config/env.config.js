import dotenv from 'dotenv'
dotenv.config();

export const env = {
    port: process.env.PORT,
    isProd: process.env.IS_PROD,
}