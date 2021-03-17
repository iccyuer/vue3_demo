
const express = require('express')
const app = express()
const port = 9999

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use('/',express.static('../dist'));

app.get('/getcookie', (req, res) => {
    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
    res.end('123')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})