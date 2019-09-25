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
		Pencil.write(' 123');
		expect(Pencil.get_write()).to.eql('test 123');
	});
	it('uppercase durability capabilities', function() {
		Pencil.set_canvas('');
		Pencil.set_durability(4);
		Pencil.write('Test');
		expect(Pencil.get_write()).to.eql('Tes');
	});
	it('punctuation durability capabilities', function() {
		Pencil.set_canvas('');
		Pencil.set_durability(8);
		Pencil.write('Test!');
		expect(Pencil.get_write()).to.eql('Test!');
	});
});
