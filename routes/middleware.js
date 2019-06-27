exports.MiddleWare = (req, res, next) => {
  // add your statement here.
  next()
}

exports.HelpCheck = (req, res, next) => {
  res.status(200).send('ok')
}
