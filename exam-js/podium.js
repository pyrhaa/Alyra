let tab = [14, 17, 20];

const podium = (array, sec, third) => {
  let biggest = 20;

  for (let i = 0; i <= array.length; i++) {
    if (array[i] === biggest) {
      console.log(`1st: ${biggest}`);
    }
    if (array[i] <= 18) {
      console.log(`2st: ${array[i]}`);
    } else if (array[i] <= 15) {
      console.log(`3st: ${array[i]}`);
    }
  }
};

podium(tab);
