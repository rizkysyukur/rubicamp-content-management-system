const express = require('express');
const router = express.Router();
const User = require('../models/user');
const config = require('../config/config');
const helpers = require('../helpers/util');

// let user = new User({
//   email: "saefulrizky2@gmail.com",
//   password: "1234",
//   retypepassword: "1234"
// })
// user.save()
// user.collection.drop();

/* GET home page. */
router.get('/', function(req, res, next) {
  let token = helpers.token("saefulrizky2@gmail.com", "1234", config.secret, 68400);
  res.send({
    data: {
      email: "saefulrizky2@gmail.com"
    },
    token: token
  })
})

module.exports = router;
