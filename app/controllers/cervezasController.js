
const search = (req, res) => {
  const q = req.query.q
  res.send({ mensaje: `Cerveza ${q} buscada` })
}

const list = (req, res) => {
  res.send({ mensaje: 'Lista de todas las cervezas' })
}

const show = (req, res) => {
  const id = req.params.id
  res.send({ mensaje: `Cerveza ${id} buscada` })
}

const create = (req, res) => {
  res.send({ mensaje: `Guardada una cerveza` })
}

const update = (req, res) => {
  const id = req.params.id
  res.send({ mensaje: `Actualizada la cerveza con id ${id}` })
}

const remove = (req, res) => {
  const id = req.params.id
  res.send({ mensaje: `Borrada la cerveza con id ${id}` })
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
