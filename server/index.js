import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import conn from './db/connection.js'  // mongodb connection
import routes from './routes/route.js'

dotenv.config({path:"./config.env"})
const port = process.env.PORT || 5000

const app = express()

// use middleware
app.use(cors())
app.use(express.json())

// use routes

conn.then(db => {
    if(!db) return process.exit(1)

    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`)
    })

    app.on('error', err => console.log(`Failed to connect with HTTP Server: ${err}`))
}).catch(error => {
    console.log(`Connection Failed... ${error}`)
})