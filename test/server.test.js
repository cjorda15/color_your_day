const chai = require('chai');
const should = chai.should;
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp)

describe('Client Routes', () => {
  it('should return the home page on the root', (done) => {
    chai.request(server)
    .get('/')
    .end((err, response) => {
      response.should.have.status(200)
      done()
    })
  })

  it('should return a sad path', (done) => {
    chai.request(server)
    .get('/sadness')
    .end((err, response) => {
      response.should.have.status(404)
      done()
    })
  })

});
