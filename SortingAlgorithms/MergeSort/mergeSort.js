/**
 * Merge Sort Algorithm: 
 * - Find the middle index of an array
 * - Perform merge sort on the first half of the array
 * - Perform merge sort on the second half of the array
 * - Join the first and second half of the array
 * 
 * @param {int []} arr 
 * @return {sorted array} arr
 */
const mergeSort = (arr) => {
  
  const middleIndex = arr.length / 2;

  const leftArrSorted = recursiveMergeSort(arr.slice(0, middleIndex + 1));
  const rightArrSorted = recursiveMergeSort(arr.slice(middleIndex + 1));

  return Array.join(leftArrSorted, rightArrSorted);
} 

const recursiveMergeSort = (arr) => {

  if (arr.length == 1) {
    return arr;
  } else if (arr.length == 2) {
    if (arr[0] > arr[1]) {
      return swap(0, 1, arr);
    }
  } else {
    return recursiveMergeSort(arr);
  }
}

const swap = (l, h, arr) => {
  const tmp = arr[l];
  arr[l] = arr[h];
  arr[h] = tmp;
  return arr;
}

export default {
  mergeSort
}