function sentensify(str) {
  // Only change code below this line
  let newArray = str.split(/\W/g)
  let newWord = newArray.join(' ')
  console.log(newArray)
  console.log(newWord)
  return newWord
  // Only change code above this line
}

sentensify("May-the-force-be-with-you");