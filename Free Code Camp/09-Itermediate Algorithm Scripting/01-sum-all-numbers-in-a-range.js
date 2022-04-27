function sumAll(arr) {
  let numMax = arr.reduce((a,b) => {return Math.max(a,b)})
  let numMin = arr.reduce((a,b) => {return Math.min(a,b)})
  let newArray = []
  let sumTotal
  for(let i = numMax; i >= numMin; i--){
    newArray.push(i)
  }

  sumTotal = newArray.reduce((a,b) => {
    return a + b
  })

  return sumTotal;
}

sumAll([1, 4]);