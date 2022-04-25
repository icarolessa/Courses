const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  let newArray = [...arr]
  // Only change code below this line
  return newArray.sort((a,b) => {
    return a - b;
  })
  // Only change code above this line
}

nonMutatingSort(globalArray);