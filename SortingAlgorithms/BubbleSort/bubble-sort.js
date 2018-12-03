/**
 * Bubble Sort Algorithm: 
 * 1. For each element in the array (except for the last element)
 *    1. if an element is greater than the next element, swap
 * 2. Repeat this process until no swap is executed 
 * 
 * @param {int[]} arr 
 */

const bubbleSort = (arr) => {
  let sorted = false;
  while (sorted === false) {
    let isSorted = true;
    for (let i = 0; i < arr.length - 1; i ++) {
      if (arr[i] > arr[i + 1]) {
        const tmp = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tmp;
        isSorted = false;
      }
    }
    sorted = (isSorted)? true : false;
  }
  return arr;
}

export default {
  bubbleSort
}