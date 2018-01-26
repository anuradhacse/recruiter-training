class Mammel{

	constructor(sound){
		this.sound = sound;
	}

	talk(){
		return this.sound;
	}
}

class Dog extends Mammel{
	constructor(){
		super('woffeliwofff');
	}
}



// let fluffykins = new Mammel('woof!!');
// console.log(fluffykins.talk());

let fluffykins = new Dog();
console.log(fluffykins.talk());