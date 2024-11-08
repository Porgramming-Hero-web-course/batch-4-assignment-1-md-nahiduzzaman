/* Problem 3:
Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

Example:

Input: "I love typescript", "typescript"
Output: 1 */

{
  //

  function countWordOccurrences(sentence: string, word: string): number {
    const lowerTextSentence = sentence.toLowerCase();
    const lowerTextWord = word.toLowerCase();

    const words = lowerTextSentence.split(" ");

    let wordCount = 0;

    words.forEach((currentWord: string) => {
      if (currentWord === lowerTextWord) {
        wordCount++;
      }
    });

    return wordCount;
  }

  const result = countWordOccurrences("I love typescript", "typescript");
  console.log(result);
  //
}
