// Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula:
// pesoIdeal = (72.7*altura) - 58
 
const altura = 1.56
const pesoIdeal = ((72.7 * altura) - 58).toFixed(2)

console.log(`O peso ideal de uma pessoa de ${altura}m é: ` + pesoIdeal)