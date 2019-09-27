// pencil write

class Pencil {
	constructor () {
		this.Paper = '';
		this.original_durability = 0;
		this.current_durability = 0;
		this.durability_is_set = false;
		this.length = 0;
		this.has_length = false;
		this.original_eraser_durability = 0;
		this.current_eraser_durability = 0;
		this.eraser_durability_is_set = false;
	}

	get_write () {
		return this.Paper;
	}
	
	write (characters) {
		this.Paper += this.get_durable_characters(characters);
	}
	
	write_in_space(characters, starting_space) {
		this.Paper = this.Paper.substr(0,starting_space) + characters + this.Paper.substr(characters.length + starting_space);
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
	
	erase(characters) {
		characters = this.get_eraser_durability_result(characters);
		var current_paper = this.get_write();
		var char_location = current_paper.lastIndexOf(characters);
		var char_length = characters.length;
		var add_spaces = '';
		var new_paper = '';
		var i;

		if ( char_length > 0 && char_location >= 0 ) {
			for (i = 0; i < char_length; i++) {
				add_spaces += ' ';
			}
			new_paper = current_paper.substring(0,char_location) + add_spaces + current_paper.substring(char_location + char_length);
			this.set_paper(new_paper);
		}
	}
	
	get_eraser_durability_result(characters) {
		if(this.eraser_durability_is_set) {
			var characters_to_erase = characters;
			if (this.current_eraser_durability > 0 && characters.length > this.current_eraser_durability) {
				characters_to_erase = characters.substr(-this.current_eraser_durability);
				this.current_eraser_durability = 0;
			} else {
				this.current_eraser_durability = this.current_eraser_durability - characters.length;
			}
			return characters_to_erase;
		}
		return characters;
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
	
	set_eraser_durability(value) {
		this.original_eraser_durability = this.current_eraser_durability = value;
		this.eraser_durability_is_set = true;
	}

}

pencil = new Pencil();

module.exports = pencil;
