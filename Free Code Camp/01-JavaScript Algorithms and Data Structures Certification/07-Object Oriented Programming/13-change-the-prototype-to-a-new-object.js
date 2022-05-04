function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: function(){
    console.log("Cain, cain, cain")
  },
  describe: function(){
    console.log("Beagle")
  }
  // Only change code below this line

};