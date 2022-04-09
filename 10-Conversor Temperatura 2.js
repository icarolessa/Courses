// Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit
// C = 5 * ((F-32) / 9)

const grausCel = 37
const grausFahr = (grausCel * (9/5) + 32).toFixed(2)

console.log(`${grausCel}°C equivale a ${grausFahr}°F`)
