function talk(){
	// console.log(this); //print the current object context
	console.log(this.sound);
}

let animal = {
	talk  //in ES6 we can refere talk:talk(key and value same name) by talk
}

let cat = {
	sound: 'meow!'
}

let dog = {
	sound: 'Woof!'
}

Object.setPrototypeOf(cat, animal); //making animal as the prototype of cat
Object.setPrototypeOf(dog, animal); //making animal as the prototype of dog

cat.talk();
dog.talk();
// animal.talk();

let prarieDog = {
	howl: function(){
		console.log(this.sound.toUpperCase());
	}
}

Object.setPrototypeOf(prarieDog, dog);
prarieDog.howl();

/*Changing the animal talk function - then dog will inherit this new 
functionality meaning there is no creation of separate objects
of Animal. The same animal object is used every time
*/
animal.talk = function(){
	console.log('I am a little teapot ' + this.sound)
}

dog.talk();