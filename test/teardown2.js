var should = require('should')
var teardown = require('../src/teardown2.js')

describe('teardown Konrad', function() {
  var counter = {
    count:10
  }

  afterEach(function() {
    counter.count = 10
  })

  it('should increase count property by 1', function() {
    const result = teardown(counter)
    result.should.have.properties({ count: 11 });
  })

  it('should double counter', function() {
    const result = teardown(counter, "double")
    result.should.have.properties({ count: 20 });
  })
})
