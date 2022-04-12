function checkObj(obj, checkProp) {
  let obj1 = obj[checkProp]
  console.log(obj.hasOwnProperty(checkProp), obj1);
  if(obj1){
    return obj1;
  }
  else{
    return 'Not Found'
  }
  // Only change code above this line
}