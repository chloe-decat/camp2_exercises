function toWords(sentence) {
  const allWords = sentence.split(/[.;\-?!, :]+/);

  return allWords.filter(word => word !== "");
}

module.exports = toWords;

toWords("salut tout le monde");
toWords("salut + tout + le + monde");
toWords("salut tout le monde!!!");
toWords("SALUT TOUT LE MONDE");
toWords("Salut tout le monde");
toWords("Salut tout le mon2!");
toWords("Quelle heure est-il?");
toWords("MOn cher;Quelle heure est-il?");
