const express = require('express') // llamamos a Express
const app = express()
const router = require('./routes')

var port = process.env.PORT || 8080 // establecemos nuestro puerto

// nuestra ruta irá en http://localhost:8080/api
// es bueno que haya un prefijo, sobre todo por el tema de versiones de la API
app.use('/api', router)

// iniciamos nuestro servidor
// app.listen(port)
app.listen(port, () => {
  console.log(`API escuchando por el puerto ${port}`)
})

console.log('API todavía no está escuchando')
