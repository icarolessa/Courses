// Only change code below this line
function urlSlug(title) {
  // let newStr = title.split(/\W/g).splice(/^a/g)
  let newStr = title.split(' ')

  for(let i = 0; i < newStr.length; i++){
    if(newStr[i] == ''){
      newStr.splice(i, 1)
    }
  }
  
  newStr = newStr.join('-').toLowerCase()
  return newStr
}

// Only change code above this line
urlSlug(" Winter Is  Coming");