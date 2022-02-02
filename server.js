require('dotenv').config()

const express = require('express') //Express
const app = express()

const mongoose = require('mongoose') //MongoDB
mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to database'))

app.use(express.json())

const SubscribersRouter = require('./routes/Subscribers')
app.use('/subrscribers', SubscribersRouter)


app.listen(3000)