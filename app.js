/**
 * Imports and configuration.
 */
const express = require('express')
const helmet = require('helmet')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

// Creating express server
const app = express()

/**
 * Mount necessary middleware.
 */
app.use(helmet())
app.use(express.json())

/**
 * Mount controllers for API routes.
 */


/**
 * Start the server.
 */
app.listen((port) => {
  console.log(`Express server has started. Running on port ${port}`)
})
