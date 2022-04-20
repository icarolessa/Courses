function mutation(arr) {
  let nextStr = arr[1].toLowerCase()
  let actualStr = arr[0].toLowerCase()
  for(let i = 0; i < nextStr.length; i++){
    if(actualStr.indexOf(nextStr[i]) < 0) {
      return false
    }
  }
  return true
}

mutation(["hello", "hey"]);