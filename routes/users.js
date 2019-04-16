const Users = require('../models/users.json')

exports.getUsers = (req, res) => {
  console.log('getting users...')
  res.status(200).json(Users)
}

exports.getUserId = (req, res) => {
  console.log('getting from id... ' + req.params.id)
  return res.status(200).json(Users.filter(user => { if (user.id === req.params.id) return user })[0])
}