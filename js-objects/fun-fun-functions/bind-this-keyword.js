let dog = {
  sound : "woof",
  talk: function(){
    console.log(this.sound);
  }
}

dog.talk(); //'woof'

let talkFunction = dog.talk
// talkFunction() //undefined - this keyword is not used in dog context

let boundFunction = talkFunction.bind(dog);
boundFunction(); //"woof"