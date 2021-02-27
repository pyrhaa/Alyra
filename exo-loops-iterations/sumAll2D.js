let tab = [
  [1, 2, 3],
  [4, -5, 7],
  [-3, -6],
  [10, -13]
];
let total = 0;
for (let i = 0; i < tab[0].length; i++) {
  total += tab[0][i];
}
console.log(total);

for (let i = 0; i < tab[1].length; i++) {
  total += tab[1][i];
}
console.log(total);

for (let i = 0; i < tab[2].length; i++) {
  total += tab[2][i];
}
console.log(total);

for (let i = 0; i < tab[3].length; i++) {
  total += tab[3][i];
}
console.log(total);
