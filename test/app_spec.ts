import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as server from '../src/app';

chai.use(chaiHttp);
const { expect } = chai;

describe('GET /', function() {
  it('the homepage works', function(done) {
    chai.request(server)
      .get('/')
      .end(function(err, res) {
        expect(res).status(200);
        expect(res.type).to.equal('text/html');
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

describe('GET /api/color', function() {
  it('returns default color', function(done) {
    chai.request(server)
      .get('/api/color')
      .end(function(err, res) {
        expect(res).status(200);
        expect(res.body).to.deep.equal({color: '#FF0000'});
        done();
      });
  });
});

describe('POST /api/color', function() {
  it('able to configure a new color', function(done) {
    async function main() {
      await chai.request(server)
        .post('/api/color')
        .field('color', '#ffffff')
        .end(function(err, res) {
          expect(res).status(200);
        });
      await chai.request(server)
        .get('/api/getcolor')
        .end(function(err, res) {
          expect(res).status(200);
          expect(res.body).to.deep.equal({color: '#ffffff'});
        });
    }
    done();
  });
});
