const tab = ['Mando', 'Grogu', 'Luke', 'Leia'];

for (let i = 0; i < tab.length; i++) {
  console.log(`${tab[i]}, length: ${tab[i].length}`);
}

for (const elem of tab) {
  console.log(`${elem}, length: ${elem.length}`);
}

tab.forEach((elem) => {
  console.log(`${elem}, length: ${elem.length}`);
});
