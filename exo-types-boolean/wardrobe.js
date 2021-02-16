let isRainy = true;
let isTsunami = true;
let temperature = 35;
let clothes = '' + 'escarpin, robe, chapeau';

if (isRainy) {
  clothes += 'umbrella, '; // concatenation de string
}

if (temperature < 15 || isTsunami) {
  clothes += 'coat, ';
  clothes += 'bottes';
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, ';
  clothes += 'jeans';
} else if (temperature > 25 && temperature <= 40) {
  clothes += 'cacahuetes';
  clothes += 'tequila';
} else {
  clothes += '';
}

console.log(`Je vous recommande de porter: ${clothes}`);

//probleme non resolu//
