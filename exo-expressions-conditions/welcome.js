let firstName = 'Bob';
let gender = 'male';

// Ternaire
let msg = // msg est egale a, sous certaines conditions
  gender === 'female' // est ce que gender est egale a 'female' ?
    ? `Bonjour ${firstName}, vous êtes entrée sur le chan` // si c'est vrai, msg est egale 1er choix
    : `Bonjour ${firstName}, vous êtes entré sur le chan`; // sinon msg est egale a second

console.log(msg);
