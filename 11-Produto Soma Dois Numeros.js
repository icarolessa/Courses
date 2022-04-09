// Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre:
//      o produto do dobro do primeiro com metade do segundo .
//      a soma do triplo do primeiro com o terceiro.
//      o terceiro elevado ao cubo.

const numInt1 = 4
const numInt2 = 20
const numFlo1 = 10.4
const prodDobro = ((numInt1 * 2) * (numInt2 / 2)).toFixed(2)
const somaTriplo = ((numInt1 * 3) + numFlo1).toFixed(2)
const terElevado = Math.pow(numFlo1, 3).toFixed(2)

console.log('a) produto do dobro do primeiro com metade do segundo: ' + prodDobro)
console.log('b) soma do triplo do primeiro com o terceiro: ' + somaTriplo)
console.log('c) terceiro elevado ao cubo: ' +terElevado)