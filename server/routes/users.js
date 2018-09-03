const express = require('express');
const router = express.Router();
const User = require('../models/user');
const config = require('../config/config');
const helpers = require('../helpers/util');


router.post('/register', (req, res) =>{
  let user = new User({
    email: req.body.email,
    password: req.body.password,
    retypepassword: req.body.retypepassword
  })
  user.save().then(users => {
    let token = helpers.token(users.email, users.password, config.secret, 86400)
    res.json({
      data:{
        email: users.email
      },
      token: token
    })
  }).catch(err => {
    res.json({
      error: true,
      message: err.message
    })
  })
})

router.post('/login', (req, res) =>{
  User.findOne({
    email: req.body.email,
  }).then(user => {
    if(!user){
      res.json({
        data:{
          email: "Invalid email"
        },
        token: "Login has failed"
      })
    }else{
      if(req.body.password != user.password){
        res.json({
          data:{
            email: "Password doesnt match"
          },
          token: "Login has failed"
        })
      }else{
        let token = helpers.token(user.email, user.password, config.secret, 68400);
        res.json({
          data:{
            email: user.email
          },
          token: token
        })
      }
    }
  })
})

router.post('/check', (req, res) =>{
  var token = req.body.token || req.query.token || req.header['x-access-token'];
  helpers.decoded(token, config.secret, (verify)=>{
    res.json({
      valid : verify
    })
  })
})

router.get('/destroy', (req, res) =>{
  res.json({
    logout: true
  })
})

module.exports = router;
