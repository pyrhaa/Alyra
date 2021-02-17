const a = true;
const b = true;

console.log(!a && !b);
console.log(!a || b);
console.log(a || !b);
if (a && b) {
  console.log(false);
}

//ou autrement//

const a = 1;
const b = 1;

if (!a && !b) {
  console.log(false);
} else if (!a && b) {
  console.log(true);
} else if (a && !b) {
  console.log(true);
} else {
  console.log(false);
}
