const express = require('express')
var router = express.Router()
const cervezasController = require('../controllers/cervezasController')
// PRIMERO PONDREMOS LA RUTA DE SEARCH
router.get('/search', (req, res) => {
  // res.json({ mensaje: 'Muestro las cervezas por keyword' })
  cervezasController.search(req, res)
})

router.get('/', (req, res) => {
  // res.json({ mensaje: 'Aquí tienes todas las cervezas. ¡A beber cerveza!' })
  cervezasController.list(req, res)
})

router.get('/:id', (req, res) => {
  // res.json({ mensaje: `Esta es la cerveza con ${req.params.id}` })
  cervezasController.show(req, res)
})

router.post('/', (req, res) => {
  // res.json({ mensaje: 'Cerveza guardada' })
  cervezasController.create(req, res)
})

router.put('/:id', (req, res) => {
  // res.json({ mensaje: `Cerveza con ${req.params.id} actualizada` })
  cervezasController.update(req, res)
})

router.delete('/:id', (req, res) => {
  // res.json({ mensaje: `Cerveza con ${req.params.id} borrada` })
  cervezasController.remove(req, res)
})

module.exports = router
