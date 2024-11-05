import { LoremIpsum } from "lorem-ipsum";

export const wordsGenerator = () => {
  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });

  const words = lorem.generateParagraphs(1)
  console.log(words)
};



wordsGenerator()
