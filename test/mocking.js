var should = require('should')
var mocking = require('../src/mocking.js')

describe('mocking seb', function() {
  it('should simulate a production environment', function (){
    should(mocking()).equal()
  })
})