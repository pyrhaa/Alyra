const txt = `C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar.`;
let i = 0;

while (i < txt.length) {
  if (i === 0) {
    console.log(`Title: Carthage, Author: Daniel Rondeau, ${txt.length}`);
  }
  //68
  console.log(`Le caractere ${txt[i]} est a l index ${i} `);
  i++;
}
