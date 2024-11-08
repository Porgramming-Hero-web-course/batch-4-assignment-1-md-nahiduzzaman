/* Problem 2:
Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

// Sample Input:
removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// Sample Output:
[1, 2, 3, 4, 5] */

{
  //
  function removeDuplicates(arr: number[]): number[] {
    let uniqueArray: number[] = [];
    arr.forEach((item: number) => {
      if (!uniqueArray.includes(item)) {
        uniqueArray.push(item);
      }
    });
    return uniqueArray;
  }

  const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
  console.log(result);
  //
}
