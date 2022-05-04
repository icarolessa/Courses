function nonMutatingConcat(original, attach) {
  // Only change code below this line
  let newArray = original.concat(attach)
  // Only change code above this line
  return newArray
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);