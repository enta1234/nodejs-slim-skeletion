const Router = require('express').Router()
const Authentication = require('./middleware')
const Users = require('./users')

// handCheck path
Router.get('/', Authentication.MiddleWare, Authentication.HelpCheck)

// API V3.0 Users
Router.get('/v3/users', Users.getUsers)
Router.get('/v3/users/:id', Users.getUserId)

module.exports = Router
