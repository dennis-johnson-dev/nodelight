import * as chai from 'chai';
import * as express from 'express';
import chaiHttp = require('chai-http');
import { buildApp } from '../src/app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('App', () => {
  let app: express.Application;

  beforeEach(() => {
    app = buildApp('test');
  });

  describe('GET /', function() {
    it('the homepage works', function(done) {
      chai.request(app)
      .get('/')
      .end(function(err, res) {
        expect(res).status(200);
        expect(res.type).to.equal('text/html');
        done();
      });
    });

    it('404s on other requests', function(done) {
      chai.request(app)
      .get('/bogus')
      .end(function(err, res) {
        expect(res).status(404);
        done();
      });
    });
  });

  describe('GET /api/color', function() {
    it('returns default color', function(done) {
      chai.request(app)
      .get('/api/color')
      .end(function(err, res) {
        expect(res).status(200);
        expect(res.body).to.deep.equal({color: '#FF0000'});
        done();
      });
    });
  });

  describe('POST /api/color', function() {
    it('able to configure a new color', async function() {
      await chai.request(app)
      .post('/api/color')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({ color: '#ffffff'})
      .then(function(res) {
        expect(res).status(200);
      });

      await chai.request(app)
      .get('/api/color')
      .then(function(res) {
        expect(res).status(200);
        expect(res.body).to.deep.equal({color: '#ffffff'});
      });
    });
  });
});
