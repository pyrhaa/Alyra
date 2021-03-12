const information = (prenom, nom, age) => {
  const majeur = 18;
  const sub = age - majeur;
  const minor = majeur - age;
  if (age >= majeur) {
    console.log(
      `prenom: ${prenom}\nnom: ${nom}\nage: ${age}\nvous êtes majeur depuis ${sub} ans`
    );
  } else {
    console.log(
      `prenom: ${prenom}\nnom: ${nom}\nage: ${age}\nvous serez majeur dans ${minor} ans`
    );
  }
};

information('Sofiane', 'Akermoun', 7);
