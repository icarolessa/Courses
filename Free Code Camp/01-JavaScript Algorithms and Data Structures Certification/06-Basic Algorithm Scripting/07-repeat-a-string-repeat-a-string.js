function repeatStringNumTimes(str, num) {
  let printStr = ''

  if(num <= 0){
    return ''
  }

  for(let i = 0; i < num; i++){
    printStr += str;
  }

  return printStr
}

repeatStringNumTimes("abc", 3);