const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

router.post('/', (req, res) => {
  res.json({ mensaje: 'Cerveza guardada' })
})

router.delete('/', (req, res) => {
  res.json({ mensaje: 'Cerveza borrada' })
})

module.exports = router
