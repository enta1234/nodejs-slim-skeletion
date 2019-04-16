const Router = require('express').Router()
const Authentication = require('./authentication')
const Users = require('./users')

Router.get('/', Authentication.MiddleWare, Authentication.HelpCheck)

// API V3.0 Users
Router.get('/v3/users', Authentication.MiddleWare, Users.getUsers)
Router.get('/v3/users/:id', Authentication.MiddleWare, Users.getUserId)

module.exports = Router
