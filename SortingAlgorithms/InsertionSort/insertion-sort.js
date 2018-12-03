/**
 * Insertion Sort Algorithm: 
 * 
 * - For each element in the array
 *    - Insert it in the subarray from index 0 to index i - 1 such that 
 *      at its new index j, arr[j - 1] < arr[j] < arr[j + 1]
 * 
 * @param {int []} arr 
 * @return {sorted arr} arr
 */
const insertionSort = (arr) => {

  for (let i = 0; i < arr.length; i ++) {
    for (let j = 0; j < i; j ++) {
      if (arr[j] <= arr[i] && arr[j + 1] >= arr[i]) {
        arr = Array.join(arr.slice(0, j + 1), [arr[i]], arr.slice(j + 1));
      }
    }
  }

  return arr;
}

export default {
  insertionSort
}