let tab = [4, 3, 3, 4];

const average = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; ++i) {
    sum += array[i] / array.length;
  }
  console.log(`average = ${sum}`);
};

average(tab);
