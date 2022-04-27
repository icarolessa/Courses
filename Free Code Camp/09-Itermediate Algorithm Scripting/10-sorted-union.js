function uniteUnique(arr) {
  const argu = [...arguments];
  const resultado = [];
  for (let i = 0; i < argu.length; i++) {
    for (let j = 0; j < argu[i].length; j++) {
      if (!resultado.includes(argu[i][j])) {
        resultado.push(argu[i][j]);
      }
    }
  }
  return resultado;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);