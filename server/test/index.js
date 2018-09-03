const chai = require('chai');
const chaiHTTP = require('chai-http');
const server = require('../app');

const User = require('../models/user');
const should = chai.should();

chai.use(chaiHTTP);

describe('note', function(){

  beforeEach(function(done){
    let user = new User({
      email : "anandareftina@gmail.com",
      password : "1234"
    })
    user.save(function(err){
      done();
    })
  })

  afterEach(function(done){
    User.collection.drop();
    done();
  })

  it("Seharusnya menyimpan data dan menampilkan email dan kode token dengan metode POST", function(done){
    chai.request(server)
    .post('/api/users/register')
    .send({
      email: "rizkysyukur@gmail.com",
      password: "1234"
    })
    .end(function(err, res){
      res.shoud.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('data.email');
      res.body.should.have.property('token');
      done();
    })
  })

  it("Seharusnya menampilkan email dan token dengan metode POST", function(done){
    chai.request(server)
    .post('/api/users/register')
    .send({
      email: "rizkysyukur@gmail.com",
      password: "1234"
    })
    .end(function(err, res){
      res.body.should.have.status(200);
      res.should.be.json;
      res.body.should.be.a('object');
      res.body.should.have.property('email');
      res.body.should.have.property('token');
      done();
    })
  })

})
