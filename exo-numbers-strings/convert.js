let deci = [10, 15, 16, 5005, 52390903];

let i = 0;
while (i < 5) {
  // imprime le titre au 1er tour seulement quand i egale 0
  if (i === 0) {
    console.log('Binary: ');
  }
  // Tant que i < 5, je console.log
  console.log(deci[i].toString(2));
  i++; // i = i + 1, j'incremente i de 1 a chaque tour
}

i = 0;
while (i < 5) {
  if (i === 0) {
    console.log('Octal: ');
  }
  console.log(deci[i].toString(8));
  i++;
}

i = 0;
while (i < 5) {
  if (i === 0) {
    console.log('Hexadecimal: ');
  }
  console.log(deci[i].toString(16));
  i++;
}
