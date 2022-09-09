const express = require('express')
const app = express()
const port = 8000
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.listen(port, () => {
    console.log(`Aplicacion corriendo sobre el puerto ${port}`)
})