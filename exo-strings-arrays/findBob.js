const str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n ';

const strIncludes = str.match(/bob/i);
console.log(strIncludes['index'], strIncludes[0]);
