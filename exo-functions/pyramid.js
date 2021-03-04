const pyramid = (nbBase, pattern, reverse) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log(pattern.repeat(i));
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log(pattern.repeat(i));
    }
  }
};

pyramid(10, 'A', false);
// showStars(5, true);

// showStars(10, false);

// const nbBase = 15;

// showStars(nbBase, true);
