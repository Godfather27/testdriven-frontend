var should = require('should')
var scalar = require('../src/scalar.js')

describe('scalar', function(){
  it('should take a number', function(){
    should(scalar(10)).be.a.Number()
  })

  it('should take a string', function(){
    should(scalar("10")).be.a.String()
  })

  it('should take a boolean', function(){
    should(scalar(true)).be.a.Boolean()
  })

  it('should not take null', function(){
    (function(){ scalar(null) }).should.throw()
  })
})