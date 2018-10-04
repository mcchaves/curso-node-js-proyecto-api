const Cervezas = require('../models/Cervezas')

const search = (req, res) => {
  const q = req.query.q
  res.send({ mensaje: `Cerveza ${q} buscada` })
}

const list = (req, res) => {
  // listo todas las cervezas
  Cervezas.find((err, cervezas) => {
    if (err) {
      res.status(500).send()
    }
    res.status(200).send(cervezas)
  })
}

// busco una cerveza por id
const show = (req, res) => {
  const id = req.params.id
  Cervezas.findById({ _id: id }, (err, cerveza) => {
    if (err) {
      res.send('Error: error')
    }
    if (cerveza === null) return res.status(404).send({})
    res.send(cerveza)
  })
}

// Creo nueva cerveza
const create = (req, res) => {
  const cerveza = new Cervezas(req.body)
  cerveza.save((err, cerveza) => {
    if (err) {
      return res.status(400).json({
        message: 'Error al guardar la cerveza',
        error: err
      })
    }
    return res.status(201).json(cerveza)
  })
}
module.exports = {
  search,
  list,
  show,
  create
}

const update = (req, res) => {
  const id = req.params.id
  Cervezas.findOne({ _id: id }, (err, cerveza) => {
    if (!Cervezas.ObjectId.isValid(id)) {
      return res.status(404).send()
    }
    if (err) {
      return res.status(500).json({
        message: 'Se ha producido un error al guardar la cerveza',
        error: err
      })
    }
    if (!ObjectId.isValid(id)) {
      return res.status(404).send()
    }
    if (!cerveza) {
      return res.status(404).json({
        message: 'No hemos encontrado la cerveza'
      })
    }

    Object.assign(cerveza, req.body)

    cerveza.save((err, cerveza) => {
      if (err) {
        return res.status(500).json({
          message: 'Error al guardar la cerveza'
        })
      }
      if (!cerveza) {
        return res.status(404).json({
          message: 'No hemos encontrado la cerveza'
        })
      }
      return res.json(cerveza)
    })
  })
}
module.exports = {
  search,
  list,
  show,
  create,
  update
}

const remove = (req, res) => {
  const id = req.params.id
  // res.send({ mensaje: `Borrada la cerveza con id ${id}` })
  Cervezas.findByIdAndRemove({ _id: id })
}

const cervezasController = {
  search,
  list,
  show,
  create,
  update,
  remove
}

module.exports = cervezasController
