function randomRange(myMin, myMax) {
  // Only change code below this line
  if((Math.floor(Math.random() * (myMax - myMin + 1)) + myMin) >= myMin && (Math.floor(Math.random() * (myMax - myMin + 1)) + myMin) <= myMax){
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
  } else {
    return 0
  }
  // Only change code above this line
}