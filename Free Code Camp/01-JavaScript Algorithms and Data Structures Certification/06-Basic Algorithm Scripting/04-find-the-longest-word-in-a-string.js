function findLongestWordLength(str) {
  let strings = 0
  let pala = str.split(' ')
  for(let i = 0; i < pala.length; i++){
    if(pala[i].length > strings){
      strings = pala[i].length
    }
  }
  return strings
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");