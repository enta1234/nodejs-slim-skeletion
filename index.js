'use strict'

require('dotenv').config()

const Express = require('express')
const Router = require('./routes')
const App = new Express()

App.use(Router)
App.listen(process.env.PORT, console.log(`App is running on http://localhost:${process.env.PORT}`))
