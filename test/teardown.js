var should = require('should')
var teardown = require('../src/teardown.js')

describe('teardown seb', function() {
  var testString = "Lorem Ipsum dolor sit amet"

  afterEach(function() {
    testString = "Lorem Ipsum dolor sit amet"
  })

  it('should return lowercase string', function() {
    const result = teardown(testString, "lower")
    should(result).be.exactly("lorem ipsum dolor sit amet").and.be.a.String()
  })

  it('should return uppercase string', function() {
    const result = teardown(testString, "upper")
    should(result).be.exactly("LOREM IPSUM DOLOR SIT AMET").and.be.a.String()
  })

  it('should return capitalized string', function() {
    const result = teardown(testString, "capitalized")
    should(result).be.exactly("Lorem ipsum dolor sit amet").and.be.a.String()
  })

  it('should return reversed string', function() {
    const result = teardown(testString, "reversed")
    should(result).be.exactly("tema tis rolod muspI meroL").and.be.a.String()
  })
})