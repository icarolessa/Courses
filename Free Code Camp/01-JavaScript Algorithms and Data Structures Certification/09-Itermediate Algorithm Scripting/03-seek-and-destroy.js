function destroyer(arr) {
  let newArray = Array.from(arguments).slice(1)

  newArray = arr.filter( position => {
    return !newArray.includes(position)
  })

  console.log(newArray)
  return newArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);