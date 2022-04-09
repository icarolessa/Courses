// Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//      Para homens: (72.7*h) - 58
//      Para mulheres: (62.1*h) - 44.7

const alturaHomem = 1.75
const alturaMulher = 1.56
const pesoHomem = ((72.7 * alturaHomem) - 58).toFixed()
const pesoMulher = ((62.1 * alturaMulher) - 44.7).toFixed()

console.log(`${pesoHomem}kg é peso ideal para homem de ${alturaHomem}m`)
console.log(`${pesoMulher}kg é o peso ideal para mulher de ${alturaMulher}m`)