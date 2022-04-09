// Faça um Programa que peça as 4 notas bimestrais e mostre a média
// O valor informado pelo usuário estava sendo reconhecido como String pelo JS
// Foi preciso utilizar o parseFloat() para converter o texto em número

// valores utilizados no console
const nota1 = 9.4
const nota2 = 8.3
const nota3 = 10.0
const nota4 = 7.7
// fazendo o mesmo cálculo utilizado no navegador
const media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4).toFixed(2) // usando o toFixed() para definir quantas casas decimais

// imprimindo no console o valor da média
console.log(media)