// João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho.
// Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos)
// deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes)
// e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar.
// Imprima os dados do programa com as mensagens adequadas.

const pesoPeixe = 53.0
const limite = 50.0
const valorMulta = 4
const excessoPeso = pesoPeixe - limite
const multa = excessoPeso * valorMulta

console.log(`O peixe possui ${pesoPeixe}kg, passou ${excessoPeso}kg do limite que é de ${limite}kg. A multa gerada é no valor de R$ ${multa}`)