
const express = require('express')
const app = express()
const port = 9998



// app.use('/',express.static('../dist'));

// app.get('/getcookie', (req, res) => {
//     res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
//     res.end('123')
// })

app.all("*", function (req, res, next) {
  //设置允许跨域的域名，*代表允许任意域名跨域 
//   res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Origin", "http://localhost:9999");
  res.header("Access-Control-Allow-Credentials", true);
  //允许的header类型 
  res.header("Access-Control-Allow-Headers", "content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  if (req.method.toLowerCase() == 'options') res.send(200);
  //让options尝试请求快速结束 
  else next();
})

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//   })

app.get('/getcookie2', (req, res) => {
    res.cookie('rememberme2', '13432423', { maxAge: 900000, httpOnly: true })
    res.end('1234')
})

app.get('/getuser', (req, res) => {
    console.log('req', req);
    res.json({
        name: '22'
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})