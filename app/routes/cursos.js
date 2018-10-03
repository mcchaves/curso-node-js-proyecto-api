const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ mensaje: '¡Estos son los cursos!' })
})

router.post('/', (req, res) => {
  res.json({ mensaje: 'Curso guardado' })
})

router.delete('/', (req, res) => {
  res.json({ mensaje: 'Curso borrado' })
})

module.exports = router
