function convertToRoman(num) {
    let valor = num, unidade, dezena, centena, milhar
    let numRomano = ''
    let algarismoRomano = {
        MMM: 3000, MM: 2000, M:1000,
        CM: 900, DCCC: 800, DCC: 700, DC: 600, D: 500, CD: 400, CCC: 300, CC: 200, C: 100,
        XC: 90, LXXX: 80, LXX: 70, LX: 60, L: 50, XL: 40, XXX: 30, XX: 20, X: 10,
        IX: 9, VIII: 8, VII: 7, VI: 6, V: 5, IV: 4, III: 3, II: 2, I: 1
    }

    unidade = valor % 10; // pegando resto da divisão que será a unidade
    valor = valor / 10; // atualizando o novo valor
    dezena = valor % 10; // pegando o resto da divisão que será a dezena do novo valor
    valor = valor / 10; // atualizando o novo valor
    centena = valor % 10; // 
    milhar = valor / 10;

    unidade = Math.trunc(unidade) * 1
    dezena = Math.trunc(dezena) * 10
    centena = Math.trunc(centena) * 100
    milhar = Math.trunc(milhar) * 1000

    for(let i in algarismoRomano){
        if(unidade === algarismoRomano[i]){
            numRomano += i
        }
        
        if(dezena === algarismoRomano[i]){
            numRomano += i
        }
        
        if(centena === algarismoRomano[i]){
            numRomano += i
        }
        
        if(milhar === algarismoRomano[i]){
            numRomano += i
        }
    }

    return numRomano
}

convertToRoman(36);