const jwt = require('jsonwebtoken');

module.exports = {
  token: (email, password, secret, expires)=>{
    return jwt.sign({
      email: email,
      password: password
    }, secret, {
      expiresIn: expires
    })
  }
}
