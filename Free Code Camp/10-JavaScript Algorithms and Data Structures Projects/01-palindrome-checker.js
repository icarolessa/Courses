function palindrome(str){
  let texto = str.toLowerCase()
                 .replace(/\W|\_/g, '')

  let textoComparacao = str.toLowerCase()
                           .replace(/\W|\_/g, '')
                           .split('')
                           .reverse().join('')
  
  if(texto === textoComparacao){
    return true
  } else {
    return false
  }
}

console.log('1 eye: ' + palindrome('eye')) // tem que retornar true
console.log('2 _eye: ' + palindrome('_eye')) // tem que retornar true
console.log('3 race car: ' + palindrome('race car')) // tem que retornar true
console.log('4 not a palindrome: ' + palindrome('not a palindrome')) // tem que retornar false
console.log('5 A man, a plan, a canal. Panama: ' + palindrome('A man, a plan, a canal. Panama')) // tem que retornar true
console.log('6 never odd or even: ' + palindrome('never odd or even')) // tem que retornar true
console.log('7 nope: ' + palindrome('nope')) // tem que retornar false
console.log('8 almostomla: ' + palindrome('almostomla')) // tem que retornar false
console.log('9 My age is 0, 0 si ega ym.: ' + palindrome('My age is 0, 0 si ega ym.')) // tem que retornar true
console.log('10 1 eye for of 1 eye.: ' + palindrome('1 eye for of 1 eye.')) // tem que retornar false
console.log('11 0_0 (: /-\ :) 0-0: ' + palindrome('0_0 (: /-\ :) 0-0')) // tem que retornar true
console.log('12 five|\_/|four: ' + palindrome('five|\_/|four')) // tem que retornar false