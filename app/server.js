var express = require('express') // llamamos a Express
var app = express()

var port = process.env.PORT || 8080 // establecemos nuestro puerto

app.get('/', (req, res) => {
  res.json({ mensaje: '¡Hola Gente!' })
})

app.get('/cervezas', (req, res) => {
  res.json({ mensaje: '¡A beber cerveza!' })
})

app.post('/cervezas', (req, res) => {
  res.json({ mensaje: 'Cerveza guardada' })
})

app.delete('/cervezas', (req, res) => {
  res.json({ mensaje: 'Cerveza borrada' })
})

// iniciamos nuestro servidor
// app.listen(port)
app.listen(port, () => {
  console.log(`API escuchando por el puerto ${port}`)
})

console.log('API todavía no está escuchando')
