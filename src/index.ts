import { words } from "./utils/words";
function generateTextFor30Sec() {
  
  const allWords = [
      ...words.nouns, 
      ...words.verbs, 
      ...words.adjectives, 
      ...words.adverbs
  ];
  let text = [];
  for (let i = 0; i < 100; i++) {
      const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
      text.push(randomWord);
  }
  return text.join(" ");
}

console.log(generateTextFor30Sec())

