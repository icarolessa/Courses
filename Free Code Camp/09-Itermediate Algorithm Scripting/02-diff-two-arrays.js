function diffArray(arr1, arr2) {
  let conArr = arr1.concat(arr2);
  let test = []
  let newArray = []
  let sizeArray = conArr.length - 1

  for(let i = 0; i <= sizeArray; i++){
    if(!arr1.includes(conArr[i]) || !arr2.includes(conArr[i])){
      newArray.push(conArr[i])
    } else {
      test.push(conArr[i])
    }
  }

  console.log(newArray)
  return newArray;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

function eliminaPosition(arr, value){
  if(!arr.includes(value)){
    return value
  }
}

function destroyer(arr) {
  let newArray = Array.from(arguments).slice(1)

  return arr.filter( position => {
    return !newArray.includes(position)
  })
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3, 4);
