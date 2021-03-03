const isOdd = (number) => {
  let result;
  if (number % 2 === 0) {
    result = false;
  } else {
    result = true;
  }
  return result;
};

const isEven = (number) => {
  let result = !isOdd(number);
  return result;
};

console.log(isOdd(2));
