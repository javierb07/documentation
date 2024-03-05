/*
  From Data Structures + Algorithms by Andrei Neagoie
*/

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i,
    j = 1;
  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}
console.log(`Merging ${[0, 3, 4, 31]} with ${[3, 4, 6, 30]}`);
console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30]));
