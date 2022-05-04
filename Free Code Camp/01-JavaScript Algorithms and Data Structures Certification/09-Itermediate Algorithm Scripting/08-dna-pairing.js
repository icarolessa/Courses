function pairElement(str) {
  let pares = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  let arr = str.split('');
  return arr.map(x => [x, pares[x]]);
}

pairElement("GCG");