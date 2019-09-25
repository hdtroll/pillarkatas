//pencil write tests

'use strict';
var expect = require('chai').expect;
var Pencil = require('../pencil_class.js');

describe('PencilWrite',function() {
	it('basic write capabilties', function() {
		expect(Pencil.get_write()).to.not.be.undefined;
		expect(Pencil.get_write()).to.eql('She sells sea shells');

		Pencil.write(' down by the sea shore');
		expect(Pencil.get_write()).to.eql('She sells sea shells down by the sea shore');
	});
	it('lowercase durability capabilities', function() {
		Pencil.set_canvas('');
		Pencil.set_durability(4);
		Pencil.write('test');
		expect(Pencil.get_write()).to.eql('test');
	});
	it('uppercase durability capabilities', function() {
		Pencil.set_canvas('');
		Pencil.set_durability(4);
		Pencil.write('Test');
		expect(Pencil.get_write()).to.eql('Tes');
	});
});
