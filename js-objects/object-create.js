/*Object.create method is the recommended method of
creating objects
*/

const cat = {

	init: function(sound){
		this.sound = sound;
		return this;
	},
	makeSound: function(){
		console.log(this.sound);
	}
}

/*const mark = Object.create(cat);
mark.sound = 'Meeeaww';
mark.makeSound();

const waffles = Object.create(cat);
waffles.sound = 'mrooooooooow';
waffles.makeSound();*/

const mark = Object.create(cat).init('Meeeaww');
mark.makeSound();

const waffles = Object.create(cat).init('mrooooooooow');
waffles.makeSound();

console.log('Is mark a cat? ',
	cat.isPrototypeOf(mark));