let isRainy = true;
let isWindy = false;
let degree = 17;
let i = '';

if (isRainy || isWindy) {
  i = 'Mettez votre manteau';
}
if (degree < 15) {
  i = 'Mettez votre manteau';
} else {
  i = 'Vous n avez pas besoin de manteau';
}
console.log(`Recommandations: ${i}`);
