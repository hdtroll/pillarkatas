// pencil write

class Pencil {
	constructor() {
		this.PencilWrite = "She sells sea shells";
	}

	get_write() {
		return this.PencilWrite;
	}
	
	write(characters) {
		this.PencilWrite += characters;
	}
}

pencil = new Pencil();

module.exports = pencil;
