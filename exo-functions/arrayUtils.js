let array = [99, 100, 101, 1];

const Biggest = (arr) => {
  let maxNb;
  for (i = 0; i < arr.length; i++) {
    if (!maxNb) {
      maxNb = arr[i];
    }
    if (arr[i] > maxNb) {
      maxNb = arr[i];
    }
  }
  return maxNb;
};

console.log(Biggest(array));
