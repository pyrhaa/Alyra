const guess = (userGuess) => {
  let secret = 3;
  if (userGuess < secret) {
    console.log('Too small!');
  } else if (userGuess > secret) {
    console.log('Too big!');
  } else {
    console.log('You win');
  }
};

guess(3);
