//pencil write tests

'use strict';
var expect = require('chai').expect;

describe('PencilWrite',function() {
	it('should be defined', function() {
		var PencilWrite = require('../pencil_write.js');
		expect(PencilWrite).to.not.be.undefined;
	});
});
