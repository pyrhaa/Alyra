let isRainy = true;
let isTsunami = true;
let temperature = 25;
let clothes ='escarpin, robe, chapeau';
let inParis = false;
let SalledeSport = true;

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

//A corriger, code faux//
