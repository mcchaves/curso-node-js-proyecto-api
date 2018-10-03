const express = require('express')
const router = express.Router()

// PRIMERO PONDREMOS LA RUTA DE SEARCH
router.get('/search', (req, res) => {
  res.json({ mensaje: 'Muestro las cervezas por keyword' })
})

router.get('/', (req, res) => {
  res.json({ mensaje: 'Aquí tienes todas las cervezas. ¡A beber cerveza!' })
})

router.get('/:id', (req, res) => {
  res.json({ mensaje: `Esta es la cerveza con ${req.params.id}` })
})

router.post('/', (req, res) => {
  res.json({ mensaje: 'Cerveza guardada' })
})

router.put('/:id', (req, res) => {
  res.json({ mensaje: `Cerveza con ${req.params.id} actualizada` })
})

router.delete('/:id', (req, res) => {
  res.json({ mensaje: `Cerveza con ${req.params.id} borrada` })
})

module.exports = router
