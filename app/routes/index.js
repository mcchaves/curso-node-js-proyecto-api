// para establecer las distintas rutas, necesitamos instanciar el express router
const express = require('express')
const router = express.Router()
const cervezasRouter = require('./cervezas')
const cursosRouter = require('./cursos')

router.get('/', (req, res) => {
  res.json({ mensaje: '¡Pasa pues!' })
})

router.use('/cervezas', cervezasRouter)

router.use('/cursos', cursosRouter)

module.exports = router
