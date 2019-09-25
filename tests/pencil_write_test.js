//pencil write tests

'use strict';
var expect = require('chai').expect;
var Pencil = require('../pencil_class.js');

describe('PencilWrite',function() {
	it('basic write capabilties', function() {
		var pencilwrite = Pencil.get_write();
		expect(pencilwrite).to.not.be.undefined;
		expect(pencilwrite).to.eql('She sells sea shells');
		Pencil.write(' down by the sea shore');
		pencilwrite = Pencil.get_write();
		expect(pencilwrite).to.eql('She sells sea shells down by the sea shore');
	});
	it('durability capabilities', function() {
		Pencil.set_canvas('');
		Pencil.set_durability(4);
		Pencil.write('test');
		var pencilwrite = Pencil.get_write();
		expect(pencilwrite).to.eql('test');
	});
});
