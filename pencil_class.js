// pencil write

class Pencil {
	constructor () {
		this.Paper = '';
		this.original_durability = 0;
		this.current_durability = 0;
		this.durability_is_set = false;
		this.length = 0;
		this.has_length = false;
	}

	get_write () {
		return this.Paper;
	}
	
	write (characters) {
		this.Paper += this.get_durable_characters(characters);
	}
	
	get_durable_characters(characters) {
		if(this.durability_is_set) {
			var durability_left = this.current_durability
			var character_iterator = 0;
			var characters_to_write = '';
			
			while(durability_left > 0 && characters.length > character_iterator) {
				if (characters[character_iterator].search(/[A-Z]/) == 0) {
					durability_left = durability_left - 2;
					characters_to_write += characters[character_iterator];
				} else if (characters[character_iterator].search(/[^\s]/) == 0) {
					durability_left--;
					characters_to_write += characters[character_iterator];
				} else if (characters[character_iterator].search(/[\s]/) == 0) {
					characters_to_write += characters[character_iterator];
				}
				character_iterator++;
			}
			this.current_durability = durability_left;
			return characters_to_write;
		}
		return characters;
	}
	
	sharpen() {
		if (this.has_length && this.length > 1) {
			this.current_durability = this.original_durability;
			this.length--;
		} else if (!this.has_length) {
			this.current_durability = this.original_durability;
		}
	}
	
	set_length(length) {
		this.length = length;
		this.has_length = true;
	}
	
	set_paper(writings) {
		this.Paper = writings;
	}
	
	set_durability(value) {
		this.original_durability = this.current_durability = value;
		this.durability_is_set = true;
	}

}

pencil = new Pencil();

module.exports = pencil;
