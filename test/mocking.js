var should = require('should')
var mocking = require('../src/mocking.js')

describe('mocking', function() {
	it('should simulate a production environment', function (){
		should(mocking()).equal()
	})
})