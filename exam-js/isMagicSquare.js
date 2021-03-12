//En effet, pas de mon niveau, on verra la correction, désolé.

const square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

const isMagicSquare = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array[i].length; ++j) {
      for (let k = 0; k < array[i][j].length; ++k) {
        for (let l = 0; l < array[i][j][k].length; ++l) {
          for (let m = 0; m < array[i][j][k][l].length; ++m) {
            sum += array[i][j][k][l][m];
          }
        }
      }
    }
  }
  console.log(`sum = ${sum}`);
};

isMagicSquare(square);
