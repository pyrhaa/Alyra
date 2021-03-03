const count = (min, max, step) => {
  for (min; min < max; min = min + step) {
    console.log(min);
  }
};

count(0, 100, 10);
