const tab = ['Mando', 'Grogu', 'Luke', 'Leia'];

let i = 0;
while (i < tab.length) {
  console.log(`${tab[i]}, length: ${tab[i].length}`);
  i++;
}

i = 0;
do {
  console.log(`${tab[i]}, length: ${tab[i].length}`);
  i++;
} while (i < tab.length);
