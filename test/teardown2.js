var should = require('should')
var teardown = require('../src/teardown2.js')

describe('teardown', function() {
  var counter = {
    count:10
  }

  afterEach(function() {
    counter.count = 10
  })

  it('should increase count property by 1', function() {
    const result = teardown(counter)
    should(result).be.exactly(1)
  })

  it('should double counter', function() {
    const result = teardown(counter, "double")
    should(result).be.exactly(20)
  })
})
