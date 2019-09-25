// pencil write

class Pencil {
	constructor() {
		this.PencilWrite = 'She sells sea shells';
	}

	get_write() {
		return this.PencilWrite;
	}
	
	write(characters) {
		this.PencilWrite += characters;
	}
	
	get_durable_characters(characters) {
		var durability_left = this.durability
		var character_iterator = 0;
		var characters_to_write = '';
		
		while(durability_left > 0) {
			if (characters[character_iterator].search(/[a-z]/) == 0) {
				durability_left--;
				characters_to_write += characters[character_iterator];
			}
			character_iterator++;
		}
	}
	
	set_canvas(canvas) {
		this.PencilWrite = canvas;
	}
	
	set_durability(value) {
		this.durability = value;
	}

}

pencil = new Pencil();

module.exports = pencil;
