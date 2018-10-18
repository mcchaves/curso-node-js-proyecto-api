const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

// crear un nuevo usuario.  No debe estar autenticado
router.post('', (req, res) => {
  usersController.create(req, res)
})

// login de usuario.
router.post('/login', (req, res) => {

})

// mostrar la lista de todos los usuarios.  Debe estar autenticado
router.get('', (req, res) => {

})
module.exports = router
