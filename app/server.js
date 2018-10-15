const express = require('express') // llamamos a Express
const app = express()
const router = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

require('./db')

// configuración de middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(morgan('combined'))
app.use(cors())

// nuestra ruta irá en http://localhost:8080/api
var port = process.env.PORT || 8080 // establecemos nuestro puerto

// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)

app.get('/', (req, res) => {
  res.json({ mesaje: '¡Hola clase!' })
})
// iniciamos nuestro servidor
// app.listen(port)
app.listen(port, () => {
  console.log(`API escuchando por el puerto ${port}`)
})

console.log('API todavía no está escuchando')

module.exports = app
