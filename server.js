const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const logger = require('./middlewares/errorHandler');
const authRoute = require('./routes/authRoutes');
const notesRoute = require('./routes/notesRoutes')
dotenv.config();
connectDB();

const app = express()
app.use(express.json())
app.use(logger)

app.use('/api/auth', authRoute);
app.use('/api/notes', notesRoute)

const Port = process.env.PORT ||3002

app.listen(Port, ()=>{
    console.log('Connected to server!', Port)
})