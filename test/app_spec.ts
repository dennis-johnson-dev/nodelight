import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as server from '../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('First test', function() {
  it('expect true', function () {
    expect(true).to.be.true;
  });
});

describe('Test Express', function() {
  it('responds to /', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        expect(res).status(200);
        done();
      });
  });

  it('POST to /', function(done) {
    chai.request(server)
      .post('/')
      .field('color', '#ffffff')
      .end(function(err, res) {
        expect(res).status(200);
        done();
      });
  });

  it('404s on other requests', function(done) {
    chai.request(server)
      .get('/bogus')
      .end(function(err, res) {
        expect(res).status(404);
        done();
      });
  });
});
