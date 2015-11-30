var should = require('should')
var sinon = require('sinon');
var mocking = require('../src/teardown2.js')
require('should-sinon');

describe('mocking Konrad', function() {
  var counter = {
    count:10
  }

  afterEach(function() {
    counter.count = 10
  })

  it('should increase count property by 1', function() {
    const callback = sinon.spy(mocking)
    callback.should.have.callCount(0);
    callback(counter).should.have.properties({ count: 11 });
    callback.should.have.callCount(1);
  })

  it('should double counter', function() {
    const callback = sinon.spy(mocking)
    callback.should.have.callCount(0);
    callback(counter, "double").should.have.properties({ count: 20 });
    callback.should.have.callCount(10);
  })
})
