'use strict';

// Array of 0, 1, 2
let arr = [0, 1, 2, 0, 1, 2, 0, 1, 2];

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

// Time Complexity: O(n)
function sort_three_types_elements(arr, n) {
  let low = 0,
    mid = 0,
    high = n - 1;

  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        swap(arr, low, mid);
        low++;
        mid++;
        break;

      case 1:
        mid++;
        break;

      case 2:
        swap(arr, mid, high);
        high--;
        break;
    }
  }
}

console.log('Array before sorting: ' + arr);
sort_three_types_elements(arr, arr.length);
console.log('Array after sorting: ' + arr);
