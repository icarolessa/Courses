// Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
// C = 5 * ((F-32) / 9). 

const grausFah = 100
const grausCel = (5 * ((grausFah - 32) / 9)).toFixed(2)

console.log(`${grausFah}°F é o mesmo que ${grausCel}°C`)