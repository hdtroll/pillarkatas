//pencil write tests

'use strict';
var expect = require('chai').expect;
var Pencil = require('../pencil_class.js');

describe('PencilWrite',function() {
	it('should be defined', function() {
		expect(Pencil.get_write()).to.not.be.undefined;
	});
});
