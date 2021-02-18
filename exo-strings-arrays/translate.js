const txt = (phrase) => {
  phrase
    .trim()
    .toUpperCase()
    .split(' ')
    .forEach((elem) => console.log(`mot: ${elem}`));
};

txt(
  `\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n `
);
