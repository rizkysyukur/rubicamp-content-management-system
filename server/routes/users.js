const express = require('express');
const router = express.Router();
const User = require('../models/user');
const config = require('../config/config');
const helpers = require('../helpers/util');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('register', (req, res) =>{
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

router.post('login', (req, res) =>{
  let token = helpers.token(req.body.email, req.body.password, config.secret, 68400);
  res.send({
    data: {
      email: "saefulrizky2@gmail.com"
    },
    token: token
  })
})

router.post('check', (req, res) =>{

})

router.post('destroy', (req, res) =>{

})

module.exports = router;
