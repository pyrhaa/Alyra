let BTC = 40000;
const test = (BTC) => {
  if (BTC <= 39000) {
    console.log('Acheter');
  } else if (BTC > 100000) {
    console.log('Vendre');
  } else {
    console.log('Ne rien faire');
  }
};

BTC = 38000;
test(BTC);
