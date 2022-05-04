function rot13(str) {
    let strQuebrada = str.toUpperCase().split('')
    let newStr = []
    let letrasAlfabeto = {
        ' ': ' ', '!': '!', '?': '?', '.': '.', A: 'N', B: 'O', C: 'P',
        D: 'Q', E: 'R', F: 'S', G: 'T', H: 'U', I: 'V', J: 'W', K: 'X',
        L: 'Y', M: 'Z', N: 'A', O: 'B', P: 'C', Q: 'D', R: 'E', S: 'F',
        T: 'G', U: 'H', V: 'I', W: 'J', X: 'K', Y: 'L', Z: 'M'
    }

    for(let i=0; i < strQuebrada.length; i++){
        if(letrasAlfabeto.hasOwnProperty(strQuebrada[i])){
            newStr.push(letrasAlfabeto[strQuebrada[i]])
        }        
    }

    return newStr.join('')
}

rot13("SERR PBQR PNZC");