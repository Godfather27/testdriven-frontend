var should = require('should')
var setup = require('../src/setup.js')

describe('setup', function() {
  var points = []

  before(function() {
      points.push({
        x: 15,
        y: 48, //y-x = 33
        z: 84 //z-x = 69
      })

      points.push({
        x:-14
        y:2.40 //y-x 16.4
        z:8.00 //z-x 22
      })

      points.push({
        x:-10.33
        y:-50.69 //y-x -40.36
        z:90 //z-x 100.33
      })
    });

  it('should return the unit of area for an triangle', function() {
    setup(points).should.containDeepOrdered([
      1138.5,
      180.4,
      -2024.6594
    ])
  })

  it('should return an empty array of one is provided', function() {
    setup([]).should.be.an.Array().and.empty()
  })

  it('should not take null as input', function() {
    (function() {
      setup(null)
    }).should.throw()
  })

  it('should not take no inputs', function() {
    (function() {
      setup()
    }).should.throw()
  })

})
