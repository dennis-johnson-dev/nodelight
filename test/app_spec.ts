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
});
