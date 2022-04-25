function checkPositive(arr) {
  // Only change code below this line
  let newArray = arr.every(p => p >= 0)
  return newArray
  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);