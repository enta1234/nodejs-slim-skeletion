'use strict'

require('dotenv').config()

const Express = require('express')
const Router = require('./routes')
const app = new Express()

// https://www.npmjs.com/package/explog
const explog = require('explog')

app.use(explog({
  writeFile: true
}))
app.use(Router)

app.listen(process.env.PORT, console.log(`App is running on http://localhost:${process.env.PORT}`))
