const express = require('express')
// const colors = require('colors')
const dotenv = require('dotenv').config()
// const { errorHandler } = require('./middleware/errorMiddleware')
// const connectDB = require('./config/db')
const port = process.env.PORT || 5000

const app = express()

app.get('/api/goals', (req, res) => {
  res.send('get goals')
})

app.listen(port, () => console.log(`Server started on port ${port}`))
