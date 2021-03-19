
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

// app.get('/getcookie2', (req, res) => {
//     //设置允许跨域的域名，*代表允许任意域名跨域 
//     res.header("Access-Control-Allow-Origin", "*");
//     //允许的header类型 
//     res.header("Access-Control-Allow-Headers", "content-type");
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
//     if (req.method.toLowerCase() == 'options') res.send(200);
//     //让options尝试请求快速结束 
//     res.cookie('rememberme2', '13', { maxAge: 900000, httpOnly: true })
//     res.end('123')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})