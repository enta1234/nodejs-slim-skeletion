exports.MiddleWare = (req, res, next) => {
  console.log('_Incoming: ' + req.originalUrl + ' _Method: ' + req.method)
  console.log('_Headers:', req.headers)

  next()
}

exports.HelpCheck = (req, res, next) => {
  res.status(200).send('ok')
}
