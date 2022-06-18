const dotenv = require('dotenv')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

dotenv.config({path: './config.env'})
require('./db/connection')
const User = require('./models/userschema')
app.use(express.json())

app.use(require('./router/auth'))

app.listen(PORT, () => {
    console.log(`Server is running at port: ${PORT}`)
});