// Faça um programa para uma loja de tintas. O programa deverá pedir o tamanho em metros quadrados da área a ser pintada.
// Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
// que custam R$ 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço total.

const tamMetroQuadrado = 60
const tamUmaLataPinta = 18 * 3
const qtdTinta = (tamMetroQuadrado / tamUmaLataPinta).toFixed(2)
const valorLata = 80

if(qtdTinta <= 1){
    console.log(`Para pintar ${tamMetroQuadrado}m², você precisará de ${qtdTinta} lata de tinta de 18L`)
}
else{
    console.log(`Para pintar ${tamMetroQuadrado}m², você precisará de ${qtdTinta} latas de tinta de 18L`)
}