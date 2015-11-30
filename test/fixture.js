var should = require('should')
var fixture = require('../src/fixture.js')

describe('fixture', function() {
  it('first account should contain key "80ktk3yuui"', function() {
    should(fixture.Accounts[0].key).equal('80ktk3yuui')
  })

  it('second account should contain key "e8ywfh7jmz"', function() {
    should(fixture.Accounts[1].key).equal('e8ywfh7jmz')
  })

  it('first account should contain balance 24.25', function() {
    should(fixture.Accounts[0].balance).equal(24.25)
  })

  it('second account should contain balance 0.00', function() {
    should(fixture.Accounts[1].balance).equal(0.00)
  })
})