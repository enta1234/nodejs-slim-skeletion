'use strict'

require('dotenv').config()

const Express = require('express')
const Router = require('./routes')
const explog = require('explog')
const app = new Express()

app.use(explog())
app.use(Router)

app.listen(process.env.PORT, console.log(`App is running on http://localhost:${process.env.PORT}`))
