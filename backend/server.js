const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

// add middleware code to use body data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// TESTING START - now imported from goalRoutes.js
// app.get('/api/goals', (req, res) => {
//   res.send('get goals')
// })
// TESTING END

app.use('/api/goals', require('./routes/goalRoutes'))
// overwrites the default express error handler
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))
