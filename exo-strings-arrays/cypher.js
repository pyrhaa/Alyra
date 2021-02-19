function CaesarDecryption(encryptedString, unshiftAmount) {
  let plainText = ''; // string vide qu'on va remplir ou concatener

  // i commence a 0, et tant que i est inferieur a la longueur de la string, j'execute ma boucle
  for (let i = 0; i < encryptedString.length; i++) {
    let encryptedCharacter = encryptedString.charCodeAt(i); // je convertis en code ascii le caractere qui se trouve a la position i
    if (encryptedCharacter >= 65 && encryptedCharacter <= 90) {
      // si le code ascii du caractere est entre 65 est 90 compris, j'execute la conversion
      plainText += String.fromCharCode(
        ((encryptedCharacter - 65 - unshiftAmount + 26) % 26) + 65 //caractere moins ascii A:65 donne position de caractere ds alphabet ds sens de lecture, - le decalage donne position a l'envers donc sens contraire et +26 pour retrouver position dans le sens de lecture. total Modulo 26 pour la position de lettre dechiffre et +65 pour avoir son Ascii.
      ); // je fais la conversion ((code ascii du caractere moins 65 moins decalage + total alphabet) modulo 26) + 65
    } else {
      plainText += String.fromCharCode(encryptedCharacter); // sinon je concatene le caractere en le reconvertissant en string
    }
  }

  return plainText; // je retourne la string complete concatene
}

// Imprime la valeur de retour de la fonction CaesarDecryption avec encryptedString et unshiftAmount en arguments
console.log(
  CaesarDecryption(
    'YRMV PFL VMVI YRU R UIVRD EVF KYRK PFL NVIV JF JLIV NRJ IVRC NYRK ZW PFL NVIV LERSCV KF NRBV WIFD KYRK UIVRD YFN NFLCU PFL BEFN KYV UZWWVIVETV SVKNVVE KYV UIVRD NFICU REU KYV IVRC NFICU',
    17
  )
);
