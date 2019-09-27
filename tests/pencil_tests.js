//pencil write tests

'use strict';
var expect = require('chai').expect;
var Pencil = require('../pencil_class.js');

describe('PencilTests',function() {
	beforeEach( function() {
		Pencil.set_paper('');
	});
	
	it('basic write capabilties', function() {
		Pencil.set_paper('She sells sea shells');
		expect(Pencil.get_write()).to.not.be.undefined;
		expect(Pencil.get_write()).to.eql('She sells sea shells');

		Pencil.write(' down by the sea shore');
		expect(Pencil.get_write()).to.eql('She sells sea shells down by the sea shore');
	});
	
	it('lowercase durability capabilities', function() {
		Pencil.set_durability(4);
		Pencil.write('test');
		expect(Pencil.get_write()).to.eql('test');
	});
	
	it('uppercase durability capabilities', function() {
		Pencil.set_durability(4);
		Pencil.write('Test');
		expect(Pencil.get_write()).to.eql('Tes');
	});
	
	it('lowercase with spaces durability capabilities', function() {
		Pencil.set_durability(7);
		Pencil.write('test 123');
		expect(Pencil.get_write()).to.eql('test 123');
	});
	
	it('uppercase with spaces durability capabilities', function() {
		Pencil.set_durability(7);
		Pencil.write('Test 123');
		expect(Pencil.get_write()).to.eql('Test 12');
	});
	
	it('punctuation durability capabilities', function() {
		Pencil.set_durability(8);
		Pencil.write('Test!');
		expect(Pencil.get_write()).to.eql('Test!');
	});
	
	it('sharpen capabilities', function() {
		var durability = 20;
		var text_to_write = 'The quick brown fox jumps over the lazy dog, Fido.';
		Pencil.set_durability(durability);
		Pencil.write(text_to_write);

		var currently_written = Pencil.get_write();
		Pencil.sharpen();
		Pencil.write(text_to_write.substr(currently_written.length));

		currently_written = Pencil.get_write();
		Pencil.sharpen();
		Pencil.write(text_to_write.substr(currently_written.length));
		expect(Pencil.get_write()).to.eql('The quick brown fox jumps over the lazy dog, Fido.');
	});
	
	it('sharpen with length limit capabilities', function() {
		var durability = 20;
		var text_to_write = 'The quick brown fox jumps over the lazy dog, Fido.';
		Pencil.set_length(2);
		Pencil.set_durability(durability);
		Pencil.write(text_to_write);

		var currently_written = Pencil.get_write();
		Pencil.sharpen();
		Pencil.write(text_to_write.substr(currently_written.length));

		currently_written = Pencil.get_write();
		Pencil.sharpen();
		Pencil.write(text_to_write.substr(currently_written.length));
		expect(Pencil.get_write()).to.eql('The quick brown fox jumps over the lazy dog, Fi');
	});
	
	it('basic erase capabilities', function() {
		Pencil.set_paper('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
		Pencil.erase('chuck');
		expect(Pencil.get_write()).to.eql('How much wood would a woodchuck chuck if a woodchuck could       wood?');
	});
	
	it('multiple erase capabilities', function() {
		Pencil.set_paper('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
		Pencil.erase('chuck');
		Pencil.erase('chuck');
		expect(Pencil.get_write()).to.eql('How much wood would a woodchuck chuck if a wood      could       wood?');
	});
	
	it('erase nothing capabilities', function() {
		Pencil.set_paper('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
		Pencil.erase('');
		expect(Pencil.get_write()).to.eql('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
	});
	
	it('erase characters not found capabilities', function() {
		Pencil.set_paper('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
		Pencil.erase('woood');
		expect(Pencil.get_write()).to.eql('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
	});
	
	it('eraser degradation capability', function () {
		Pencil.set_paper('How much wood would a woodchuck chuck if a woodchuck could chuck wood?');
		Pencil.set_eraser_durability(3);
		Pencil.erase('chuck');
		expect(Pencil.get_write()).to.eql('How much wood would a woodchuck chuck if a woodchuck could ch    wood?');
	});
});
