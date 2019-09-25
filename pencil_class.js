// pencil write

class Pencil {
	constructor() {
		this.PencilWrite = 'She sells sea shells';
		this.durability = 0;
		this.durability_is_set = false;
	}

	get_write() {
		return this.PencilWrite;
	}
	
	write(characters) {
		this.PencilWrite += this.get_durable_characters(characters);
	}
	
	get_durable_characters(characters) {
		if(this.durability_is_set) {
			var durability_left = this.durability
			var character_iterator = 0;
			var characters_to_write = '';
			
			while(durability_left > 0 && characters.length > character_iterator) {
				if (characters[character_iterator].search(/[A-Z]/) == 0) {
					durability_left = durability_left - 2;
					characters_to_write += characters[character_iterator];
				} else if (characters[character_iterator].search(/[^\s]/) == 0) {
					durability_left--;
					characters_to_write += characters[character_iterator];
				}
				character_iterator++;
			}
			
			return characters_to_write;
		}
		return characters;
	}
	
	set_canvas(canvas) {
		this.PencilWrite = canvas;
	}
	
	set_durability(value) {
		this.durability = value;
		this.durability_is_set = true;
	}

}

pencil = new Pencil();

module.exports = pencil;
