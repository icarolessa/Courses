// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês.
// Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda,
// 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
//      a) salário bruto.
//      b) quanto pagou ao INSS.
//      c) quanto pagou ao sindicato.
//      d) o salário líquido.
//      e) calcule os descontos e o salário líquido, conforme a tabela abaixo:

const valorHora = 19.00
const horasMes = 160.00
const irrf = 0.11
const inss = 0.08
const sindi = 0.05
const salarioBruto = (valorHora * horasMes).toFixed(2)
const calcIrrf = (salarioBruto * irrf).toFixed(2)
const calcInss = (salarioBruto * inss).toFixed(2)
const calcSindi = (salarioBruto * sindi).toFixed(2)
const descontos = (parseFloat(calcInss) + parseFloat(calcIrrf) + parseFloat(calcSindi)).toFixed(2) // verificar necessidade do parseFloat()
const salarioLiquido = (salarioBruto - descontos).toFixed(2)

console.log('Salario bruto: R$' + salarioBruto)
console.log('- IR (11%): R$' + calcIrrf)
console.log('- INSS (8%): R$' + calcInss)
console.log('- Sindicato (5%): R$' +calcSindi)
console.log('= Salario bruto: R$' + salarioLiquido)
console.log('-------------------------------')
console.log('Total de desconstos: R$ ' + descontos)
