const User = require('../models/User')

const create = (req, res) => {
  const { email, password } = req.body
  const user = new User({ email, password })
  user.save((err, user) => {
    if (err) res.status(400).send({ error: err })
    res.status(201).send(user)
  })
}

module.exports = {
  create
}
