var jwt = require('jsonwebtoken');

var token  = jwt.sign({uid:"9452"},"kongzhong_jwt_secrets_salt", { expiresIn:3600*24*30});

console.log(token)